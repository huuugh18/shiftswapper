import React from 'react';
import { connect } from 'react-redux';
import {setDayShift}           from './cal-functions/shift-functions'


const NoShift = ({shift,onClickShift}) => {
    return (
        <div onClick={onClickShift} /> 
  )
}

const mapDispatch = (dispatch,{date}) => {
    return {
        onClickShift: () => {
            dispatch(setDayShift(date))
        }
    }
}

export default connect(null,mapDispatch)(NoShift)