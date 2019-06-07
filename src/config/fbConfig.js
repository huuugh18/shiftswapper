import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyDK5DXNoahQ2oVEsEY6ec4oH3Rz3DUUB0I",
    authDomain: "shiftswapper-5ebe4.firebaseapp.com",
    databaseURL: "https://shiftswapper-5ebe4.firebaseio.com",
    projectId: "shiftswapper-5ebe4",
    storageBucket: "shiftswapper-5ebe4.appspot.com",
    messagingSenderId: "806305888353",
    appId: "1:806305888353:web:80d9cb958aacc2ec"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;