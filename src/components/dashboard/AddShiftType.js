import React, {useState} from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { addShiftType } from '../calendar/cal-functions/shift-functions';
import Grid from '@material-ui/core/Grid'

const AddShiftType = ({handleSubmit}) => {
    const [shiftValue, setShiftValue] = useState('');
    const clickSubmit = e => {
        e.preventDefault();
        handleSubmit(shiftValue)
    };
    return (
        <form onSubmit={clickSubmit}>
            <Grid 
                container 
                spacing={2}
                justify="center"
                alignItems="center"
            >
                <Grid item xs={6} sm={6}>
                    <TextField 
                        id="shift-type-input"
                        label="New Shift Type"
                        // className={classes.textField}
                        variant="outlined"
                        value={shiftValue}  
                        onChange={e =>  setShiftValue(e.target.value)}
                        margin="dense"
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Button 
                        type='submit' 
                        variant='contained' 
                        color='secondary'
                        size='large'
                    >
                        Add Shift
                    </Button> 
                </Grid>
            </Grid>
        </form>
    )
}

const mapDispatch = dispatch => {
    return {
        handleSubmit: shift => dispatch(addShiftType(shift))
    }
}

export default connect(null,mapDispatch)(AddShiftType)