import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from '../../config/fbConfig'
import { firebaseReducer } from 'react-redux-firebase'

import appReducer from './appReducer'
import authReducer from './authReducer'
import signupReducer from './signupReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    signup: signupReducer,
    firebase: firebaseReducer
})

export default createStore(rootReducer,
    compose(
        composeWithDevTools(applyMiddleware(Thunk.withExtraArgument({getFirebase,getFirestore}))),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);

