import React,  { useState } from 'react'
import { connect }          from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {logoutUser} from '../../store/actions/auth'

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'left'
    },
}));


const SignedInToolbar = ({onLogout}) => {
    const classes= useStyles()
    return <Toolbar>
                <Typography variant="h4" className={classes.title} >
                    ShiftSwapper
                </Typography>
                <IconButton>
                    <AccountCircle />
                </IconButton>
                <Button color='inherit' onClick={onLogout}> Sign Out </Button>
            </Toolbar>
}

const mapDispatch = (dispatch) => {
    return {
        onLogout: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatch)(SignedInToolbar)