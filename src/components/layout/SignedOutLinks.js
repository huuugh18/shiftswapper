import React,  { useState } from 'react'
import { connect }          from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'left'
    }
}));


const SignedOutToolbar = ({ onClickSignUp, onClickSignIn}) => {
    const classes= useStyles()
    return <Toolbar>
                <Typography variant="h4" className={classes.title} >
                    ShiftSwapper
                </Typography>
                <Button color='inherit' onClick={onClickSignIn}> Sign In </Button>
                <Button color='inherit' onClick={onClickSignUp}> Sign Up </Button>
            </Toolbar>
}

const mapDispatch = (dispatch) => {
    return {
        // onLogin: () => dispatch(loginUser()),
        onClickSignUp: () => dispatch({type:'SET_SCREEN_SIGNUP'}),
        onClickSignIn: () => dispatch({type:'SET_SCREEN_SIGNIN'})
    }
}

export default connect(null,mapDispatch)(SignedOutToolbar)