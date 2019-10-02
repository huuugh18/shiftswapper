import React, {  } from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import Calendar from '../calendar/Calendar'
import ShiftTypes from './ShiftTypes'
import CircularProgress from '@material-ui/core/CircularProgress';
import BottomNavigation from './BottomNav'

const Dashboard = ({ auth, uid }) => {
    if(!auth.isLoaded) return <CircularProgress />
    if(!auth.uid) return <Redirect to='/signin' />
    return <div>
            <Calendar />
            <ShiftTypes uid={uid}/>
            <BottomNavigation />
        </div>
}

const mapState = state => {
    return {
      auth: state.firebase.auth,
      uid: state.firebase.auth.uid,
    }
  }

export default connect(mapState)(Dashboard)