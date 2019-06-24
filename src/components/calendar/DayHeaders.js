import React, { } from 'react'
import { connect }          from 'react-redux'

import {dayOfWeekContainer,dayOfWeekStyle}      from './cal-styles'


const DayHeaders = () => {
    return <div id='dayOfWeekContainer' style={dayOfWeekContainer}>
                <div id='dayofWeek_sun' style={dayOfWeekStyle}>Sun</div>
                <div id='dayofWeek_mon' style={dayOfWeekStyle}>Mon</div>
                <div id='dayofWeek_tue' style={dayOfWeekStyle}>Tue</div>
                <div id='dayofWeek_wed' style={dayOfWeekStyle}>Wed</div>
                <div id='dayofWeek_thu' style={dayOfWeekStyle}>Thu</div>
                <div id='dayofWeek_fri' style={dayOfWeekStyle}>Fri</div>
                <div id='dayofWeek_sat' style={dayOfWeekStyle}>Sat</div>
            </div>

}

export default connect()(DayHeaders)