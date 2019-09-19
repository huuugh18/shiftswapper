import React, {  } from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import Calendar from '../calendar/Calendar'
import CircularProgress from '@material-ui/core/CircularProgress';

const Dashboard = ({auth}) => {
    if(!auth.isLoaded) return <CircularProgress />
    if(!auth.uid) return <Redirect to='/signin' />
    return <div>
            User Home
            <Calendar />
        </div>
}

const mapState = state => {
    // console.log(state);
    return {
      auth: state.firebase.auth,
    }
  }

export default connect(mapState)(Dashboard)