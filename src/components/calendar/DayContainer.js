import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { compose } from 'redux'
import moment               from 'moment'
import { firestoreConnect } from 'react-redux-firebase'
import Shift from './ShiftContainer'

// import ShiftEvent           from '../shifts/Event'
import DayShift             from '../shifts/DayShift'
import NightShift           from '../shifts/NightShift'

import {setShift}           from './cal-functions/shift-functions'
import {dayStyle}           from './cal-styles'


// const getTypeDisplay = (type,date) => {
//     switch (type) {
//         case 'day': return <DayShift date={date}/>
//         case 'night':return <NightShift date={date}/>
//         default : return
//     }
// }

const getDateNum = date => date ? moment(date).format('DD') : null

const getShiftType = (shiftState,dayDate) => {
    const formatDate = dayDate.format('MM-DD-YYYY')
    const item = Object.values(shiftState).find(a => a.date === formatDate)
    return item ? item.type : 'none'

}

const DayComponent = ({date,isToday,type,onClickDay,shift,uid}) => {
    return (
        <div className={'calendar_day_parent'} style={dayStyle(isToday,type)} onClick={onClickDay}>
            { getDateNum(date) }
            {/* { getTypeDisplay(type,date) } */}
            {
                shift ? <Shift date={date} shift={shift}/> : <div/>
            }
        </div>
    )
}

const mapDispatch = (dispatch,{date}) => {
    return {
        onClickDay: () => {
            console.log('Clicked:', date)
            dispatch(setShift(date))
         }
    }
}

const mapState = (state,{date}) => {
    const currentDate = state.date.currentDate
    const shifts = state.firestore.data.shifts
    // const type = getShiftType(shiftState,date)
    const isToday = moment(date).format('DDDYYYY') === moment(currentDate).format('DDDYYYY')
    let shift = {}
    if(shifts) {
        const formattedDate = date.format('MM-DD-YYYY')
        console.log({shifts})
        shift = Object.values(shifts).find(a => {

            a.date === formattedDate
        })
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