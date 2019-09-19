export const loginUser = () => {
    return (dispatch, getState, getFirebase) => {
        const {auth:{email,password}} = getState();
        const firebase = getFirebase();
        console.log('login', email)

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            console.log('login success')
            dispatch ({type: 'LOGIN_USER'})
        })
        .catch( err => {
            console.log(err)
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const logoutUser = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        console.log('logout')
        // make async call to firebase to logout user
        firebase.auth().signOut().then(() => {
            dispatch ({type: 'LOGOUT_USER'})
        })
    }
}

export const signupUser = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const {signup:{password, firstName, lastName, email}} = getState()
        const firestore = getFirestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName,
                lastName,
                uid: resp.user.uid,
                email,
                created: new Date()
            })
        })
        .then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch( err => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
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