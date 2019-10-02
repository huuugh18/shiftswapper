import React, {  } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <AppBar />
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}



export default App;
