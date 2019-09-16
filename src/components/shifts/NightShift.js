import React, { Component } from 'react'
import { connect }          from 'react-redux'

// import {setShift}           from '../cal-functions/date-thunks'
// import {shiftEventStyle}    from '../styles/cal-styles'
import NightIcon            from '@material-ui/icons/Brightness3'


const NightShiftEvent = ({eventClick,date,type}) => {
    return <div className='shiftEventStyle shiftEventNight'  onClick={eventClick}>
            <NightIcon style={{color:'white'}}/>
        </div>
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
    return {date}
}

export default connect(mapStateToProps,mapDispatchToProps)(NightShiftEvent)
