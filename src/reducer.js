import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk'


const authenticationState = {
    user_auth: false
}

const authState = (state=authenticationState, action) => {
    console.log(action)
    switch(action.type){
        case 'LOGIN_USER': return Object.assign({}, state, {user_auth: true});
        case 'LOGOUT_USER': return Object.assign({}, state, {user_auth: false});
        default: return state
    }
}

const appReducer = combineReducers({
    authState
})

export default createStore(appReducer,composeWithDevTools(applyMiddleware(Thunk)))