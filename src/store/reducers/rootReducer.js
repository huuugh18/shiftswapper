import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk'

import appReducer from './appReducer'
import authReducer from './authReducer'
import signupReducer from './signupReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    signup: signupReducer
})

export default createStore(rootReducer,composeWithDevTools(applyMiddleware(Thunk)))