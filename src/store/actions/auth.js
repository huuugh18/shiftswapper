export const loginUser = () => {
    return (dispatch, getState) => {
        const {auth:{email,password}} = getState()
        console.log('login', email)
        // make async call to firebase
        dispatch ({type: 'LOGIN_USER'})
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
    return (dispatch, getState) => {
        const {signup:{password, firstName, lastName, email}} = getState()
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