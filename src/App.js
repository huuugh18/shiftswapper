import React, {  } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const getActivePage = (page) => {
  switch(page){
    case 'signin': return <SignIn />
    case 'signup': return <SignUp />
    case 'user_home': return <div> User Home </div>
    default: return <SignIn />
  }
}


const App = ({authenticated, activePage}) => {
    return <BrowserRouter>
            <div className="App">
              <AppBar />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
              </Switch>
              {/* {
                getActivePage(activePage)
              } */}
            </div>
          </BrowserRouter>
}


const mapStateToProps = (state) => {
  const authenticated = state.auth.user_auth
  const activePage = state.app.active_page
  return {authenticated,activePage}
}


export default connect(mapStateToProps)(App);
