import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom'
import AppBar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const App = ({authenticated, activePage}) => {
    return <BrowserRouter>
            <div className="App">
              <AppBar />
              {
                getActivePage(activePage)
              }
            </div>
          </BrowserRouter>
}

const getActivePage = (page) => {
  switch(page){
    case 'signin': return <SignIn />
    case 'signup': return <SignUp />
    case 'user_home': return <div> User Home </div>
    default: return <SignIn />
  }
}

const mapStateToProps = (state) => {
  const authenticated = state.auth.user_auth
  const activePage = state.app.active_page
  return {authenticated,activePage}
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps)(App);
