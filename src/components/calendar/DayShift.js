import React from 'react';
import { connect } from 'react-redux';
import {setNightShift}           from './cal-functions/shift-functions'
import DayIcon              from '@material-ui/icons/WbSunny'


const DayShift = ({shift,onClickShift}) => {
    return (
        <div onClick={onClickShift}> 
            <div> {shift.type} </div> 
            <DayIcon />
        </div>
  )
}

const mapDispatch = (dispatch,{date}) => {
    return {
        onClickShift: () => dispatch(setNightShift(date))
    }
}

export default connect(null,mapDispatch)(DayShift)