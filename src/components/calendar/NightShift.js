import React from 'react';
import NightIcon from '@material-ui/icons/Brightness3';


const DayShift = ({shift,date}) => {
    return (
        <div> 
            <div> {shift.type} </div> 
            <NightIcon />
        </div>
  )
}

export default (DayShift)