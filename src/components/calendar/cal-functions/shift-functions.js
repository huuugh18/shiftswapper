import moment from 'moment'
import uniq from '@trystal/uniq-ish'

const buildShift = (date,uid) => {
    return {
        date,
        type: 'day',
        uid
    }
}
const checkForShift = (formatDate, shifts) => {
    // check if date has a shift
    // return true or false
    const item = Object.values(shifts).find(a => a.date === formatDate)
    const id = Object.keys(shifts).find(id => shifts[id].date === formatDate)
    return id ? {id,item} : false
}


export const setShift = (date) => {
    return (dispatch,getState, getFirebase) => {
        const firebase = getFirebase();
        const db = firebase.firestore()
        const dbShifts = firebase.firestore().collection("shifts");
        const dbUsers = firebase.firestore().collection("users");
        const {firestore:{data:{shifts}},firebase:{auth:{uid}}} = getState();
        const formatDate = date.format('MM-DD-YYYY')
        // build db object
        const docData = buildShift(formatDate, uid)
        // need to check to see if shift date already exists if so change shift type
        const shiftExists = checkForShift(formatDate, shifts)
        if(shiftExists) {
            return db.runTransaction( transaction => {
                return transaction.get(db.collection("shifts").doc(shiftExists.id)).then(shiftDoc => {
                    // if(!shiftDoc.exsists){
                    //     return 'Could not find shift'
                    // }
                    const shiftRef = dbShifts.doc(shiftExists.id)
                    const type = shiftDoc.data().type
                    console.log({shiftDoc,type})
                    switch(type){
                        case 'day': return transaction.update(shiftRef, {type:'night'});
                        case 'night': return transaction.delete(shiftRef);
                        // case 'night': return transaction.update(shiftRef, {type:'day'});
                        default: throw 'type not recognized'
                    }
                })
            })
            .then(() => console.log('Transaction successful'))
            .catch( err => console.log('Transaction failed:', err));
        };
        if(!shiftExists){
            return dbShifts.add(docData).then(docRef => {
                // add shift key to user shifts array
                dbUsers.doc(uid).update({
                    shifts: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                })
                .then(() => {
                    console.log("Document successfully written!", docRef.id);
                })
                .catch(err => console.log({err}))
            });
        };
        // const query = dbShifts.where("date", "==", formatDate).where("uid", "==", uid)
        // let docId, shiftRef
        // return query.get().then(querySnap => {
        //     docId = querySnap.empty ? null : querySnap.docs[0].id
        //     console.log(docId)
        // })
        // RUN QUERY TO SEE IF DOC EXISTS
        // IF SO GET DOC ID - NEED THAT TO RUN TRANSACTION
            // RUN TRANSACTION, READ DOC IN SHIFTS WITH DOC ID
            // ( CANNOT RUN TRANSACTION WITH A QUERY - MUST BE A DOC READ)
            // BASED ON TYPE
                // - IF TYPE = DAY - SET TYPE TO NIGHT
                // - IF TYPE = NIGHT - DELETE DOC + REMOVE DOC ID FROM USER SHIFTS ARRAY
        // IF NO DOC EXISTS THEN CREATE DOC WITH DAY SHIFT
        // return query.get().then(querySnap => {
        //     if(querySnap.empty){
        //         return dbShifts.add(docData).then(docRef => {
        //             // add shift key to user shifts array
        //             dbUsers.collection("users").doc(uid).update({
        //                 shifts: firebase.firestore.FieldValue.arrayUnion(docRef.id)
        //             })
        //             .then(() => {
        //                 console.log("Document successfully written!", docRef.id);
        //             })
        //             .catch(err => console.log({err}))
        //         })
        //     }
        //     else {
        //         const shiftData = querySnap.docs[0].data();
        //         const docId = querySnap.docs[0].id;
        //         if(shiftData.type === 'day'){
        //             return dbShifts.doc(docId).update({type:'night'}).then(() => console.log('Type updated to Night'))
        //             .catch(err => console.log({err}));
        //         }
        //         if(shiftData.type === 'night'){
        //             console.log('remove shift')
        //             // have to remove it from user array too
        //             return dbShifts.doc(docId).delete().then(() => console.log('Shift Removed'))
        //             .catch(err => console.log({err}));
        //         }
        //         else{
        //             return console.log('error nothing happened');
        //         }

        //     }
        // })
        // .catch(function(error) {
        //     console.log("Error getting documents: ", error);
        // });
        // console.log({query})
        // if true then need to change type
        // if false then need to create shift
        // Create a reference to the cities collection
// var citiesRef = db.collection("cities");

// // Create a query against the collection.
// var query = citiesRef.where("state", "==", "CA");
        // const item = Object.values(shifts).find(a => a.date === formatDate)
        // if no previous shift on that date create a new one
        // if (!item) {
        //     const key = uniq.randomId(5)
        //     const shiftLog = {
        //         type: 'day',
        //         date: date.clone().format('MM-DD-YYYY'),
        //         key: key,
        //     }
        //     const payload = {selectedShift:key,selectedDate:date}
        //     dispatch({type:'SET_DATE_STATE',payload})
        //     return fbRef.child(key).set(shiftLog)
        // }
        // switch (item.type) {
        //     // case where shift is a day => type to night
        //     case 'day':
        //         const payloadDay = {selectedShift:item.key,selectedDate:moment(date)}
        //         dispatch({type:'SET_DATE_STATE',payloadDay})
        //         return fbRef.child(item.key).child('type').set('night')
        //     // case where shift is a night => delete shift
        //     case 'night':
        //         const payloadNight = {selectedShift:null,selectedDate:moment(date)}
        //         dispatch({type: 'SET_DATE_STATE',payloadNight})
        //         return fbRef.child(item.key).remove()
        // }
    }
}
