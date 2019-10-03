import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import AddShiftType from './AddShiftType'
import EditShiftType from './EditShiftTypes'



const ShiftTypes = ({ message, shiftScreen }) => {
    return (
        <div>
            { shiftScreen === 'edit_shift' ? <EditShiftType /> : null } 
            { shiftScreen === 'add_shift' ?  <AddShiftType /> : null }
            { message ?  <p> {message} </p> : null }
        </div>
    )
}

const mapState = state => {
    return {
        message: state.app.edit_shift_type_msg,
        shiftScreen: state.app.shift_screen,
    }
}


export default compose(
    connect(mapState),
    firestoreConnect(props => [
        // { collection:'users', doc: props.uid },
        { collection:'shiftTypes', doc: props.uid }
    ])
)(ShiftTypes)