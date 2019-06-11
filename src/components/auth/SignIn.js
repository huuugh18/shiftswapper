import React from 'react';
import { connect } from 'react-redux';

import {Avatar, Button, CssBaseline, TextField, Link, Grid} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {setSignInPassword, setSignInEmail, loginUser } from '../../store/actions/auth'


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = ({handleSignIn,onChangeEmail, onChangePw, email, password}) => {
  const classes = useStyles();

  return <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField value={email} onChange={onChangeEmail} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField value={password} onChange={onChangePw} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSignIn}> Sign In </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
};

const mapState = (state) => {
    const {authState:{email,password}} = state
    return {email,password}
}
const mapDispatch = (dispatch) => {
    return {
        handleSignIn: () => console.log('sign in'),
        onChangeEmail: (e) => dispatch(setSignInEmail(e.target.value)),
        onChangePw: e => dispatch(setSignInPassword(e.target.value))
    }
}

export default connect(mapState,mapDispatch)(SignIn);