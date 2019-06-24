import React, { Component } from 'react'
import { connect }       from 'react-redux'
import DayHeaders        from './DayHeaders'
import Week              from './Week'
import {getDateMatrix}   from '../cal-functions/date-matrix'


const mapDateMatrix = (monthMatrix) => {
    return monthMatrix.map((row,i) => 
        <Week key={i} id={i} dates={row}/>
    )
}


const MonthComponent = ({monthMatrix,state}) => {
    return <div id='calMonthParent'>
                <DayHeaders />
                {
                    mapDateMatrix(monthMatrix)
                }
            </div>
}

const mapStateToProps = (state) => {
    const {dateState:{periodStart}} = state
    const monthMatrix = getDateMatrix(periodStart)
    return {monthMatrix,state}
}

export default connect(mapStateToProps)(MonthComponent) 
