export const addShiftType = (shift) => {
    return (dispatch, getState, getFirebase) => {
        const db = getFirebase().firestore();
        const {firestore:{data:{shiftTypes}},firebase:{auth:{uid}}} = getState();
        const userCurrentShiftTypes = Object.getOwnPropertyNames(shiftTypes[uid])
        const formattedShift = shift.charAt(0).toUpperCase() + shift.slice(1).toLowerCase()
        const shiftExistsCheck = userCurrentShiftTypes.findIndex(i =>  i === formattedShift)
        if(shiftExistsCheck >= 0){
            return dispatch({type:'',payload:'Shift already exists'})
        }
        else if(shiftExistsCheck < 0){
            // else if not add to user doc under shiftTypes
            return db.collection("shiftTypes").doc(uid).set({[formattedShift]:true},{ merge: true})
                .then(() => dispatch({type:'EDIT_SHIFT_TYPE_MSG',payload:'New Shift Type Added'}))
                .catch(err => console.log('ERROR:',err))

        }
    }
}

export const removeShiftType = shift => {
    return (dispatch, getState, getFirebase) => {
        const db = getFirebase().firestore();
        const {firebase:{auth:{uid}}} = getState();
        return db.collection('shiftTypes').doc(uid).update({
            [shift]: getFirebase().firestore.FieldValue.delete()
        }).then(() => {
            dispatch({type:'EDIT_SHIFT_TYPE_MSG', payload:'Shift Removed'})
        }).catch(err => {
            console.log('ERROR:',err)
        })

    }
}


const buildShift = (date,uid) => {
    return {
        date,
        type: 'day',
        uid
    }
}
const checkForShift = (formatDate, shifts) => {
    if (!shifts) {
        return false
    }
    const item = Object.values(shifts).find(a =>  a ? a.date === formatDate :  null)
    const id = Object.keys(shifts).find(id => shifts[id] ? shifts[id].date === formatDate : null)
    return id ? {id,item} : false
}

export const deleteShift = (date) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const db = getFirebase().firestore();
        const {firestore:{data:{shifts}},firebase:{auth:{uid}}} = getState();
        const formatDate = date.format('MM-DD-YYYY')
        const shiftExists = checkForShift(formatDate, shifts)
        let batch = db.batch();
        let shiftRef = db.collection("shifts").doc(shiftExists.id)
        batch.delete(shiftRef);
        let userRef = db.collection("users").doc(uid)
        batch.update(userRef, {shifts: firebase.firestore.FieldValue.arrayRemove(shiftExists.id) })
        return batch.commit()
            .then(() => console.log('Batch commit successful, shift removed'))
            .catch(err => console.log('ERROR:',err));
    }
}

export const setNightShift = date => {
    return (dispatch, getState, getFirebase) => {
        // change date type of shift from day to night
        // don't need to change the shift tag in the user since shift still exists
        const db = getFirebase().firestore();
        const {firestore:{data:{shifts}}} = getState();
        const formatDate = date.format('MM-DD-YYYY');
        const shiftExists = checkForShift(formatDate, shifts)
        return db.collection("shifts").doc(shiftExists.id).update({type: 'night'})
            .then(() => console.log('Night shift set'))
            .catch(err => console.log('ERROR:',err));
        }
}

export const setDayShift = date => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const db = getFirebase().firestore();
        const {firebase:{auth:{uid}}} = getState();
        const formatDate = date.format('MM-DD-YYYY');
        const docData = buildShift(formatDate, uid)
        return db.collection("shifts").add(docData)
            // add shift key to user shifts array
            .then(docRef => {
                db.collection("users").doc(uid).update({
                    shifts: firebase.firestore.FieldValue.arrayUnion(docRef.id)
            })
            .then(() => console.log("Document successfully written!", docRef.id))
            .catch(err => console.log({err}))
        });

    }
}

export const onClickShift = date => {
    return (dispatch, getState) => {
        const {firestore:{data:{shifts}}} = getState();
        const formatDate = date.format('MM-DD-YYYY')
        const shiftExists = checkForShift(formatDate, shifts)
        if(!shiftExists) {
            return dispatch(setDayShift(date))
        }
        else if(shiftExists.item.type === 'day'){
            return dispatch(setNightShift(date))
        }
        else if(shiftExists.item.type === 'night'){
            return dispatch(deleteShift(date))
        }
        else return console.log('shift set error')
    }
}

// export const setShift = (date) => {
//     return (dispatch,getState, getFirebase) => {
//         const firebase = getFirebase();
//         const db = firebase.firestore()
//         const dbShifts = firebase.firestore().collection("shifts");
//         const dbUsers = firebase.firestore().collection("users");
//         const {firestore:{data:{shifts}},firebase:{auth:{uid}}} = getState();
//         const formatDate = date.format('MM-DD-YYYY')
//         // build db object
//         const docData = buildShift(formatDate, uid)
//         // need to check to see if shift date already exists if so change shift type
//         const shiftExists = checkForShift(formatDate, shifts)
//         if(shiftExists) {
//             return db.runTransaction( transaction => {
//                 return transaction.get(db.collection("shifts").doc(shiftExists.id)).then(shiftDoc => {
//                     const shiftRef = dbShifts.doc(shiftExists.id)
//                     const type = shiftDoc.data().type
//                     console.log({shiftDoc,type})
//                     switch(type){
//                         case 'day': return transaction.update(shiftRef, {type:'night'});
//                         case 'night': return transaction.delete(shiftRef);
//                         default: throw 'type not recognized'
//                     }
//                 })
//             })
//             .then(() => console.log('Transaction successful'))
//             .catch( err => console.log('Transaction failed:', err));
//         };
//         if(!shiftExists){
//             return dbShifts.add(docData).then(docRef => {
//                 // add shift key to user shifts array
//                 dbUsers.doc(uid).update({
//                     shifts: firebase.firestore.FieldValue.arrayUnion(docRef.id)
//                 })
//                 .then(() => {
//                     console.log("Document successfully written!", docRef.id);
//                 })
//                 .catch(err => console.log({err}))
//             });
//         };
//     }
// }
