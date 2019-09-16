import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk'

import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore'
import { reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase'

import fbConfig from '../../config/fbConfig'

import appReducer from './appReducer'
import authReducer from './authReducer'
import signupReducer from './signupReducer'
import dateReducer from './dateReducer'

// ------------ LOGGER -------------
const logger = store => next => action => {
   console.group(action.type);
   console.log('%c prev state', 'color: gray', store.getState());
   console.log('%c action', 'color: blue', action);
   let result = next(action);
   console.log('%c next state', 'color: green', store.getState());
   console.groupEnd(action.type);
   return result
 }

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    signup: signupReducer,
    firebase: firebaseReducer,
    date: dateReducer,
    firestore: firestoreReducer
})


const store = createStore(rootReducer,
    compose(
        composeWithDevTools(
            applyMiddleware(Thunk.withExtraArgument({getFirebase,getFirestore}),logger),
            reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),
            reduxFirestore(fbConfig),
        ),
    )
);

export default store;
