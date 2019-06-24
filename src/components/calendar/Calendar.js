import React, { Component } from 'react'
import { connect }          from 'react-redux'
import CalHeader            from './MonthHeader'
import Month                from './Month'
import {calendarContainer}  from './cal-styles'

const MonthComponent = () => {
    return <div id={'calendarParent'} style={calendarContainer} className={'calendar'}>
                <CalHeader />
                <Month />
            </div>
}


export default connect()(MonthComponent)