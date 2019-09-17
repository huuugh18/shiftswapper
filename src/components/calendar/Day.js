import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { compose } from 'redux'
import moment               from 'moment'
import { firestoreConnect } from 'react-redux-firebase'

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

const DayComponent = ({date,isToday,type,onClickDay}) => {
    return (
        <div className={'calendar_day_parent'} style={dayStyle(isToday,type)} onClick={onClickDay}>
            { getDateNum(date) }
            {/* { getTypeDisplay(type,date) } */}
        </div>
    )
}

const mapDispatchToProps = (dispatch,{date}) => {
    return {
        onClickDay: () => {
            console.log('Clicked:', date)
            dispatch(setShift(date))
         }
    }
}

const mapStateToProps = (state,{date}) => {
    const {date: {currentDate} } = state
    // const type = getShiftType(shiftState,date)
    const isToday = moment(date).format('DDDYYYY') === moment(currentDate).format('DDDYYYY')
    return {isToday}
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'shifts'}
    ])
)(DayComponent)
