import React from 'react';
import { connect } from 'react-redux';
import { removeShiftType } from '../calendar/cal-functions/shift-functions';
import Button from '@material-ui/core/Button'

const ShiftTypeItem = ({shift,removeShift}) => {
    return (
        <span>
            <p>{shift}</p>
            <Button 
                color='secondary' 
                variant='outlined' 
                onClick={removeShift}
            >
                Remove Shift Type
            </Button>
        </span>
    )
}

const mapDispatch = (dispatch,{shift}) => {
    return {
        removeShift: (e) => {
            e.preventDefault();
            dispatch(removeShiftType(shift));
        }
    }
}

export default connect(null,mapDispatch)(ShiftTypeItem)