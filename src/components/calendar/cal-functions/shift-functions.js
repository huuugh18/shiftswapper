import moment from 'moment'
import uniq from '@trystal/uniq-ish'

const buildShift = (date,uid,type) => {
    return {
        date,
        type: 'day',
        uid
    }
}
const checkForShift = (date, shifts) => {
    // check if date has a shift
    // return true or false
    return false
}


export const setShift = (date) => {
    return (dispatch,getState, getFirebase) => {
        const firebase = getFirebase();
        const db = firebase.firestore();
        const {firestore:{data:{shifts}},firebase:{auth:{uid}}} = getState();
        const formatDate = date.format('MM-DD-YYYY')
        // build db object
        const docData = buildShift(formatDate, uid)
        // need to check to see if shift date already exists if so change shift type
        const checkForShift = (formatDate, shifts)
        // if true then need to change type
        // if false then need to create shift
        db.collection("shifts").add(docData)
            .then(docRef => {
                // add shift key to user shifts array
                db.collection("users").doc(uid).update({
                    shifts: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                })
                .then (() => {
                    console.log("Document successfully written!", docRef.id);
                })
                .catch(err => console.log({err}))
            });
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
