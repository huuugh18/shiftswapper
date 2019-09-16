import React, { Component } from 'react'
import { connect }          from 'react-redux'
import moment               from 'moment'
import * as DATETHUNK       from '../cal-functions/date-thunks'
import {shiftEventStyle}         from '../styles/cal-styles'
import {Glyphicon}          from 'react-bootstrap'


const EventComponent = ({dispatch,index,isComplete,isActive,type,date}) => {
    const eventClick = e => {
        e.stopPropagation()
        dispatch(DATETHUNK.setShift(date))
    }

    const width = screen.width
    const glyphType = type === 'day' ? 'sunglasses' : 'bed'
    const capsType = type.toUpperCase()
    return <div>
                <div style={shiftEventStyle(type,isActive,width)} onClick={eventClick}>
                    {capsType}<br/>
                    <Glyphicon glyph={glyphType}/>
                </div>
        </div>
}


const mapStateToProps = (state,{index,date}) => {
    const {dateState: {selectedEvent}} = state
    const isActive = selectedEvent === index 
    return {state,isActive,date}
}

export default connect(mapStateToProps)(EventComponent)
