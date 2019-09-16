import moment from 'moment'
import uniq from '@trystal/uniq-ish'

export const setShift = (date) => {
    return (dispatch,getState, { getFirebase, getFirestore }) => {
        const {shiftState,firebase:{auth:{uid}}} = getState();
        const firebase = getFirebase();
        const formatDate = date.format('MM-DD-YYYY')
        const item = Object.values(shiftState).find(a => a.date === formatDate)
        const fbRef = firebase.database().ref(`users/${uid}/shifts`)
        // if no previous shift on that date create a new one
        if (!item) {
            const key = uniq.randomId(5)
            const shiftLog = {
                type: 'day',
                date: date.clone().format('MM-DD-YYYY'),
                key: key,
            }
            const payload = {selectedShift:key,selectedDate:date}
            dispatch({type:'SET_DATE_STATE',payload})
            return fbRef.child(key).set(shiftLog)
        }
        switch (item.type) {
            // case where shift is a day => type to night
            case 'day':
                const payloadDay = {selectedShift:item.key,selectedDate:moment(date)}
                dispatch({type:'SET_DATE_STATE',payloadDay})
                return fbRef.child(item.key).child('type').set('night')
            // case where shift is a night => delete shift
            case 'night':
                const payloadNight = {selectedShift:null,selectedDate:moment(date)}
                dispatch({type: 'SET_DATE_STATE',payloadNight})
                return fbRef.child(item.key).remove()
        }
    }
}
