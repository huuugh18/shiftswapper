import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import DayIcon              from '@material-ui/icons/WbSunny'
import Brightness3Icon from '@material-ui/icons/Brightness3';


const ShiftComponent = ({shift,date}) => {
  return (
    <div> Shift: {shift.type} </div>
  )
}

export default (ShiftComponent)