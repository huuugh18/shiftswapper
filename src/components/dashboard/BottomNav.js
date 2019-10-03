import React, { useState } from 'react'
import { connect } from 'react-redux'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { setBottomNav } from '../../store/actions/appActions';

const useStyles = makeStyles({
    root: {
        top: 'auto',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'aliceBlue',
    }
});

const BottomNav = ({handleNav}) => {
    const [ value, setValue ] = useState(0);
    const handleChange = (e, newVal) => {
        setValue(newVal);
        handleNav(newVal);
    }
    const classes = useStyles();
    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            className={classes.root}
        >
        <BottomNavigationAction label="Edit Shift Types" icon={<EditIcon />} />
        <BottomNavigationAction label="Add Shift" icon={<AddIcon />} />
      </BottomNavigation>
    )
}

const mapDispatch = dispatch  => {
    return {
        handleNav: (val) => dispatch(setBottomNav(val))
    }
}

export default connect(null,mapDispatch)(BottomNav)