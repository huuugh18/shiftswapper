import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import firebase from './config/fbConfig'

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import App from './App'
import './index.css'
import store from './store/store'


const rrfConfig = {
  userProfile: 'users',
  useFirestorForProfile: true,
  attachAuthIsReady: true
}


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}
console.log({store,rrfProps})
// store.firebaseAuthIsReady.then(() => {
    render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
  );
// });

