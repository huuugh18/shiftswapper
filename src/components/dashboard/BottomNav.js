import React, { useState } from 'react'
import { connect } from 'react-redux'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { setBottomNav } from '../../store/actions/appActions';

const BottomNav = ({handleNav}) => {
    const [ value, setValue ] = useState(0);
    const handleChange = (e, newVal) => {
        setValue(newVal);
        handleNav(newVal);
    }
    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
        >
        <BottomNavigationAction label="Edit Shift Types" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Add Shift" icon={<FavoriteIcon />} />
      </BottomNavigation>
    )
}

const mapDispatch = dispatch  => {
    return {
        handleNav: (val) => dispatch(setBottomNav(val))
    }
}

export default connect(null,mapDispatch)(BottomNav)