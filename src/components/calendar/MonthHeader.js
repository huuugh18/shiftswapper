import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import LeftIcon from '@material-ui/icons/ChevronLeft'
import RightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton';

import {changeCalMonth}         from '../../store/actions/calendar'

import {monthHeaderContainer,monthNavBtn,monthYearDisplay}          from './cal-styles'


const MonthHeader = ({getNextMonth,getPrevMonth,calendarMonth}) => {
    return (
        <div id={'calHeader'} style={monthHeaderContainer('large')}>
            <div id={'calHeaderBtnLeft'}>
                <IconButton onClick={getPrevMonth} style={monthNavBtn} color='primary' varient='contained' >
                    <LeftIcon />
                </IconButton>
            </div>
            <div id={'calHeaderTitle'} style={monthYearDisplay}>
                {moment(calendarMonth).format('MMMM YYYY')}
            </div>
            <div id={'calHeaderBtnRight'}>
                <IconButton onClick={getNextMonth} color='primary' varient='contained' style={monthNavBtn} >
                    <RightIcon/>
                </IconButton>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
     return {
          getPrevMonth: () => dispatch(changeCalMonth('prev')),
          getNextMonth: () => dispatch(changeCalMonth('next'))
     }
}

const mapStateToProps = (state) => {
    const {date:{calendarMonth}} = state
    // const periodEnd = moment(periodStart).add(13,'d')
    // const startMD = moment(periodStart).format('MMM D')
    // const startY = moment(periodStart).format('YYYY')
    // const endMD = moment(periodEnd).format('MMM D')
    return {calendarMonth}
}

export default connect(mapStateToProps,mapDispatchToProps)(MonthHeader)