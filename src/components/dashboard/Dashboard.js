import React, {  } from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import Calendar from '../calendar/Calendar'
import ShiftTypes from './ShiftTypes'
import CircularProgress from '@material-ui/core/CircularProgress';
import BottomNavigation from './BottomNav'

const Dashboard = ({auth,uid,shiftScreen}) => {
    if(!auth.isLoaded) return <CircularProgress />
    if(!auth.uid) return <Redirect to='/signin' />
    return <div>
            User Home
            <Calendar />
            <ShiftTypes uid={uid}/>
            {
                shiftScreen === 'edit_shift' ? <p>Edit Shift </p> 
                    : shiftScreen === 'add_shift' ? <p> Add Shift</p>
                    : null
            }

            <BottomNavigation />
        </div>
}

const mapState = state => {
    
    return {
      auth: state.firebase.auth,
      uid: state.firebase.auth.uid,
      shiftScreen: state.app.shift_screen
    }
  }

export default connect(mapState)(Dashboard)