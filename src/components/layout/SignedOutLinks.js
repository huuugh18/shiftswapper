import React,  { useState } from 'react'
import { connect }          from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, Button } from '@material-ui/core'
import {loginUser} from '../../store/actions/auth'

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'left'
    }
}));


const SignedOutToolbar = ({onLogin, onClickSignUp}) => {
    const classes= useStyles()
    return <Toolbar>
                <Typography variant="h4" className={classes.title} >
                    ShiftSwapper
                </Typography>
                <Button color='inherit' onClick={onLogin}> Login </Button>
                <Button color='inherit' onClick={onClickSignUp}> Sign Up </Button>
            </Toolbar>
}

const mapDispatch = (dispatch) => {
    return {
        onLogin: () => dispatch(loginUser()),
        onClickSignUp: () => dispatch({type:'SET_SCREEN_SIGNUP'})
    }
}

export default connect(null,mapDispatch)(SignedOutToolbar)