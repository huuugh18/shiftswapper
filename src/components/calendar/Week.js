import React, { Component } from 'react'
import { connect }          from 'react-redux'

import Day                  from './Day'
import {weekContainer,weekDay}      from '../styles/cal-styles'

const getDays = (dates) => {
    return dates.map((day,i) =>
        <div key={day.format('DDDYYYY')} id={day.format('DDDYYYY')} style={weekDay('large')} > 
            <Day date={day} />
        </div>
    )
}

const WeekComponent = ({dates}) => {
    return <div className={'calWeekParent'} style={weekContainer}>
                {
                    getDays(dates)
                }
          </div>
}


export default connect()(WeekComponent)