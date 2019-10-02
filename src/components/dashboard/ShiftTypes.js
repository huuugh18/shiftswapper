import React, {useState} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { addShiftType } from '../calendar/cal-functions/shift-functions';
import ShiftTypeItem from './ShiftTypeItem'


const ShiftTypes = ({ shiftTypes, handleSubmit, message, shiftScreen }) => {
    const [shiftValue, setShiftValue] = useState('testing');
    // const clickSubmit = () => handleSubmit(this.state.shiftValue);
    const clickSubmit = e => {
        e.preventDefault();
        handleSubmit(shiftValue)
    };
    return (
        <div>
            {
                shiftScreen === 'edit_shift' ? 
                    <div>
                        {
                            shiftTypes ? shiftTypes.map(a => 
                                <ShiftTypeItem key={a} shift={a} />
                            )  : null 
                        }
                    </div>
                : shiftScreen === 'add_shift' ?
                    <form onSubmit={clickSubmit}>
                        <TextField 
                            id="shift-type-input"
                            label="Shift"
                            // className={classes.textField}
                            value={shiftValue}  
                            onChange={e =>  setShiftValue(e.target.value)}
                            margin="normal"
                        />
                        <Button type='submit' variant='contained' color='primary'>Add New Shift</Button> 
                    </form>
                : null

            }
            { message ?  <p> {message} </p> : null }
        </div>
    )
}

const mapState = (state,{uid}) => {
    const shiftObject = uid && state.firestore.data.shiftTypes ? state.firestore.data.shiftTypes[uid] : null
    const shiftTypes = shiftObject ? Object.getOwnPropertyNames(shiftObject) : null
    return {
        shiftTypes,
        message: state.app.edit_shift_type_msg,
        shiftScreen: state.app.shift_screen
    }
}
const mapDispatch = dispatch => {
    return {
        // setShiftInputValue:  e => dispatch({type: 'SET_SHIFT_INPUT', payload:{setShiftInputValue: e.target.value}}),
        handleSubmit: shift => dispatch(addShiftType(shift))
    }
}

export default compose(
    connect(mapState,mapDispatch),
    firestoreConnect(props => [
        // { collection:'users', doc: props.uid },
        { collection:'shiftTypes', doc: props.uid }
    ])
)(ShiftTypes)