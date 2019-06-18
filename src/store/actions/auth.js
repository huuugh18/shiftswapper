export const loginUser = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const {auth:{email,password}} = getState();
        const firebase = getFirebase();
        console.log('login', email)
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            dispatch ({type: 'LOGIN_USER'})
        })
        .catch( err => {
            console.log(err)
            dispatch({type: 'LOGIN_ERROR', err})
        })
        // make async call to firebase
    }
}

export const logoutUser = () => {
    return (dispatch, getState) => {
        // make async call to firebase to logout user
        console.log('logout')
        dispatch ({type: 'LOGOUT_USER'})
    }
}

export const signupUser = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const {signup:{password, firstName, lastName, email}} = getState()
        const firestore = getFirestore();
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( user => {
            const uid = user.uid
            let docRef = firestore.collection('users').doc(uid)
            docRef.add({
                firstName,
                lastName,
                uid,
                created: new Date()
            })
            // add user to database
        })
        .catch( error => {
            // handle error
        })
        // make async call to firebase to create auth user
        // make async call to firebase to create database user
        dispatch ({type: 'LOGIN_USER'})
    }
}

export const setSignInEmail = (email) => {
    return {type: 'SIGNIN_EMAIL_SET', payload: email}
}

export const setSignInPassword = (password) => {
    return {type: 'SIGNIN_PW_SET', payload: password}
}

export const setSignUpEmail = email => {
    return {type:'SIGNUP_EMAIL_SET', payload: {email: email}}
}
export const setSignUpPw = pw => {
    return {type:'SIGNUP_PW_SET', payload: {password: pw}}
}
export const setSignUpFirstName = name => {
    return {type: 'SIGNUP_NAME_FIRST', payload: {firstName:name}}
}
export const setSignUpLastName = name => {
    return {type: 'SIGNUP_NAME_LAST', payload: {lastName: name}}
}