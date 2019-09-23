import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import DayIcon              from '@material-ui/icons/WbSunny'
import Brightness3Icon from '@material-ui/icons/Brightness3';


const ShiftComponent = ({shift,date}) => {
  if (shift) {
    return (
      <div> Shift: {shift.type} </div>
    )
  }
  return <div/>
}

const mapDispatch = dispatch => {
  return {

  }
}

const mapState = (state,{date}) => {
  const shifts = state.firestore.data.shifts
  const shift = {}
  if(shifts) {
    const formattedDate = date.format('MM-DD-YYYY')
    const shift = Object.values(shifts).find(a => a.date === formattedDate)
    return {shift}
  }
  return {shift}
}

export default compose(
  connect(mapState,mapDispatch),
  firestoreConnect(props => [
    {
      collection:'shifts',
      where:[
        ['uid', '==', props.uid],
        // ['date', '==', moment(props.date).format('MM-DD-YYYY')]
        // ['date', '==', '09-26-2019']
      ]
    }
  ])
)(ShiftComponent)