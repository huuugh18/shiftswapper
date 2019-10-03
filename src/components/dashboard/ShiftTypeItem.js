import React from 'react';
import { connect } from 'react-redux';
import { removeShiftType } from '../calendar/cal-functions/shift-functions';
import Chip from '@material-ui/core/Chip'
// import { makeStyles } from '@material-ui/core'


const ShiftTypeItem = ({ shift, removeShift, handleClick, isSelected }) => {
    const variant = isSelected ? 'default' : 'outlined'
    return (
        <Chip 
            label={shift} 
            variant={variant}
            onClick={handleClick} 
            onDelete={removeShift}
            style={{margin: '8px'}}
            color="primary" 
        />
    )
}

const mapDispatch = (dispatch,{shift}) => {
    return {
        removeShift: (e) => {
            e.preventDefault();
            dispatch(removeShiftType(shift));
        },
        handleClick: () => {
            dispatch({type:'SET_SELECTED_SHIFT_TYPE',payload:shift})
        }

    }
}

const mapState = (state,{shift}) => {
    const isSelected = state.app.user_selected_shift_type === shift
    return { isSelected }
}

export default connect(mapState,mapDispatch)(ShiftTypeItem)