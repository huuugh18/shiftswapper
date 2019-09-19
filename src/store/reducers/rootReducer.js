import { combineReducers } from 'redux'

import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import appReducer from './appReducer'
import authReducer from './authReducer'
import signupReducer from './signupReducer'
import dateReducer from './dateReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    signup: signupReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    date: dateReducer
})

export default rootReducer;
