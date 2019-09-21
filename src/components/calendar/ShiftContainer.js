import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';

const ShiftComponent = (props,{shifts}) => {
  // console.log(props,{shifts})
  return (
    <div>
      Shift
    </div>
  )
}

const mapDispatch = dispatch => {
  return {

  }
}

const mapState = state => {
  const shifts = state.firestore.data.shifts
  console.log(state,shifts)
  return {shifts}
}

export default compose(
  connect(mapState,mapDispatch),
  firestoreConnect(props => [
    {
      collection:'shifts',
      where:[
        ['uid', '==', props.uid]
      ]
      // ,
      // where: [
      //   ['date', '==', props.date]
      // ]

    }
  ])
)(ShiftComponent)