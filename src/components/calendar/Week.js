import React from 'react'
import { connect }          from 'react-redux'

import DayContainer                  from './DayContainer'
import {weekContainer,weekDay}      from './cal-styles'

const getDays = (dates,uid) => {
    return dates.map((day,i) =>
        <div key={day.format('DDDYYYY')} id={day.format('DDDYYYY')} style={weekDay('large')} >
            <DayContainer date={day} uid={uid} />
        </div>
    )
}

const WeekComponent = ({dates, uid}) => {
    return (
        <div className={'calWeekParent'} style={weekContainer}>
            { getDays(dates,uid) }
        </div>
    )
}

const mapState = state => {
    const uid = state.firebase.auth.uid
    return {uid}
}

export default connect(mapState)(WeekComponent)