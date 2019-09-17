import React from 'react';
import { connect } from 'react-redux';

import {Avatar, Button, CssBaseline, TextField, Link, Grid, Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { signupUser } from '../../store/actions/auth'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp =({email, password, firstName, lastName, handleChange, handleSubmit}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5"> Sign up </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={handleChange} value={firstName} autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" autoFocus />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={handleChange} value={lastName} variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={handleChange} value={email} variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={handleChange} value={password} variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > Sign Up </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="#" variant="body2"> Already have an account? Sign in </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
    </Container>
  )
};

const mapState = state => {
  const {signup:{email, password, firstName, lastName}} = state
  return {email, password, firstName, lastName}
}

const mapDispatch = dispatch => {
    return {
      handleChange: e => dispatch({type: 'SET_SIGNUP_FIELD', payload:{[e.target.id]: e.target.value}}),
      handleSubmit: e => {
        e.preventDefault();
        dispatch(signupUser())
      }
    }
}


export default connect(mapState,mapDispatch)(SignUp)