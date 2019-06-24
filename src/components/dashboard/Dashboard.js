import React, {  } from 'react';
import {connect} from 'react-redux'
import Calendar from '../calendar/Calendar'

const Dashboard = () => {
    return <div>
        User Home
        <Calendar />
    </div>
}

export default connect()(Dashboard)