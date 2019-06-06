import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDK5DXNoahQ2oVEsEY6ec4oH3Rz3DUUB0I",
    authDomain: "shiftswapper-5ebe4.firebaseapp.com",
    databaseURL: "https://shiftswapper-5ebe4.firebaseio.com",
    projectId: "shiftswapper-5ebe4",
    storageBucket: "shiftswapper-5ebe4.appspot.com",
    messagingSenderId: "806305888353",
    appId: "1:806305888353:web:80d9cb958aacc2ec"
  };


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
