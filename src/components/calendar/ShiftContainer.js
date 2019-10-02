import React from 'react';
import DayIcon              from '@material-ui/icons/WbSunny'
import Brightness3Icon from '@material-ui/icons/Brightness3';


const ShiftComponent = ({shift,date}) => {
    return (
        <div> 
            <div> {shift.type} </div> 
                {
                    shift.type === 'day' ? <DayIcon /> : shift.type === 'night' ?  <Brightness3Icon /> : null
                }
        </div>
  )
}

export default (ShiftComponent)