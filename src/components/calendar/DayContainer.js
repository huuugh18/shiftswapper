import React from 'react'
import { connect }          from 'react-redux'
import { compose } from 'redux'
import moment               from 'moment'
import { firestoreConnect } from 'react-redux-firebase'
import DayShift from './DayShift'
import NightShift from './NightShift'

import {onClickShift}           from './cal-functions/shift-functions'
import {dayStyle}           from './cal-styles'


const getDateNum = date => date ? moment(date).format('DD') : null

// const getShiftType = (shiftState,dayDate) => {
//     const formatDate = dayDate.format('MM-DD-YYYY')
//     const item = Object.values(shiftState).find(a => a.date === formatDate)
//     return item ? item.type : 'none'

// }

const DayComponent = ({date,isToday,type,onClickDay,shift,uid}) => {
    return (
        <div className={'calendar_day_parent'} style={dayStyle(isToday,shift)} onClick={onClickDay}>
            { getDateNum(date) }
            {/* { getTypeDisplay(type,date) } */}
            {
                shift && shift.type === 'day' ? <DayShift date={date} shift={shift}/> : <div/>
            }
            {
                shift && shift.type === 'night' ? <NightShift date={date} shift={shift}/> : <div/>
            }
        </div>
    )
}

const mapDispatch = (dispatch,{date}) => {
    return {
        onClickDay: () => {
            dispatch(onClickShift(date))
         }
    }
}

const mapState = (state,{date}) => {
    const currentDate = state.date.currentDate
    const shifts = state.firestore.data.shifts
    const isToday = moment(date).format('DDDYYYY') === moment(currentDate).format('DDDYYYY')
    let shift = {}
    if(shifts) {
        const formattedDate = date.format('MM-DD-YYYY')
        shift = Object.values(shifts).find(a => a ? a.date === formattedDate : null )
    }
    return {isToday, shift}
}

export default compose(
  connect(mapState,mapDispatch),
  firestoreConnect(props => [
    {
      collection:'shifts',
      where:[
        ['uid', '==', props.uid]
      ]
    }
  ])
)(DayComponent)