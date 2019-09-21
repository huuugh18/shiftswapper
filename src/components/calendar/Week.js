import React, { Component } from 'react'
import { connect }          from 'react-redux'

import DayContainer                  from './DayContainer'
import {weekContainer,weekDay}      from './cal-styles'

const getDays = (dates) => {
    return dates.map((day,i) =>
        <div key={day.format('DDDYYYY')} id={day.format('DDDYYYY')} style={weekDay('large')} >
            <DayContainer date={day} />
        </div>
    )
}

const WeekComponent = ({dates}) => {
    return (
        <div className={'calWeekParent'} style={weekContainer}>
            { getDays(dates) }
        </div>
    )
}


export default connect()(WeekComponent)