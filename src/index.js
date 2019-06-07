import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import Thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import store from './reducer'
import firebaseConfig from './config/fbConfig'


// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


console.log('STORE:',store)
// const store = createStore(appReducer, composeWithDevTools(applyMiddleware(Thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// firebase.initializeApp(firebaseConfig)
// store.dispatch(firebase.initializeApp(firebaseConfig))