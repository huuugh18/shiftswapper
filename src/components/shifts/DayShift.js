import React, { Component }   from 'react'
import { connect }            from 'react-redux'

// import {setShift}             from '../cal-functions/date-thunks'
// import {shiftEventStyle}      from '../styles/cal-styles'
import DayIcon              from '@material-ui/icons/WbSunny'

const DayShiftEvent = ({eventClick,date,type}) => {
    return (
        <div className='shiftEventStyle shiftEventDay' onClick={eventClick}>
            <DayIcon/>
        </div>
    )
}
const mapDispatchToProps = (dispatch,{date}) => {
    return {
        eventClick:  (e) => {
            e.stopPropagation()
            // return dispatch(setShift(date))
        }
    }
}


const mapStateToProps = (state,{date}) => {
    return {state,date}
}

export default connect(mapStateToProps,mapDispatchToProps)(DayShiftEvent)
