export const loginUser = () => {
    console.log('login')
    return {type: 'LOGIN_USER'}
}

export const logoutUser = () => {
    console.log('logout')
    return {type: 'LOGOUT_USER'}
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