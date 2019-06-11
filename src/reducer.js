import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk'


const authStateDefault = {
    user_auth: false,
    email: '',
    password: '',
    signupEmail: '',
    signupPw: '',
    signupFirstName:'',
    signupLastName: '',
}

const authState = (state=authStateDefault, action) => {
    switch(action.type){
        case 'LOGIN_USER': return Object.assign({}, state, {user_auth: true});
        case 'LOGOUT_USER': return Object.assign({}, state, {user_auth: false});
        case 'SIGNIN_EMAIL_SET': return Object.assign({}, state, {email: action.payload})
        case 'SIGNIN_PW_SET': return Object.assign({}, state, {password: action.payload})
        default: return state
    }
}

const signupStateDefault = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}

const signupState = (state=signupStateDefault, action) => {
    switch(action.type){
        case 'SET_SIGNUP_FIELD': return Object.assign({}, state, action.payload)
        default: return state

    }
}

const appStateDefault = {
    active_page: 'signIn'
}

const appState = (state=appStateDefault, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_SCREEN_SIGNIN': return Object.assign({}, state, {active_page: 'signin'});
        case 'SET_SCREEN_SIGNUP': return Object.assign({}, state, {active_page: 'signup'});
        case 'SET_SCREEN_USER_HOME': return Object.assign({}, state, {active_page: 'user_home'});

        default: return state
    }
}

const appReducer = combineReducers({
    authState,
    appState,
    signupState
})

export default createStore(appReducer,composeWithDevTools(applyMiddleware(Thunk)))