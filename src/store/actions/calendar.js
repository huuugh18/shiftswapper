import moment           from 'moment'

const buildPayload = (month,navDir) => {
    switch (navDir) {
        case 'next': return moment(month).add(1,'month')
        case 'prev': return moment(month).subtract(1,'month')
        default: return {}
    }
}

export const changeCalMonth = (navDir) => {
    return function (dispatch,getState) {
        let {date:{calendarMonth}} = getState()
        const payload = buildPayload(calendarMonth,navDir)
        dispatch({type:'SET_CALENDAR_MONTH',payload})
    }
}
