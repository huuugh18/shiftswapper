import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom'
import AppBar from './components/layout/Navbar'

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
};

const App = ({authenticated}) => {
    return <BrowserRouter>
            <div className="App">
              <AppBar />
              <p className="App-intro">
                {
                  authenticated ? 'Authenticated' : 'Not Logged in'
                }
                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
              </p>
            </div>
          </BrowserRouter>
}

const mapStateToProps = (state) => {
  const authenticated = state.authState.user_auth
  return {authenticated}
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps)(App);
