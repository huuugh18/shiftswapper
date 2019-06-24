import moment from 'moment'

const defaultState = {
    calendarMonth: moment().startOf('month'),
    currentDate: moment().format('YYYY-MM-DD'),
    // periodStart: getPresentStartDate(moment().format('YYYY-MM-DD')),
    // selectedDate: moment().format('')
    // currentPeriod: moment('02-06-2017').format('YYYY-MM-DD'),
    // selectedDate: moment().format('YYYY-MM-DD'),
    // currentDate: moment().format('YYYY-MM-DD'),
    // selectedShift: null,
}

const dateState = (state=defaultState, action) => {
    switch(action.type){
        case 'SET_CALENDAR_MONTH': return {...state, calendarMonth: action.payload}
        default: return state;
    }
}

export default dateState;