const authStateDefault = {
    user_auth: false,
    email: '',
    password: '',
    authError: null
}

const authState = (state=authStateDefault, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            console.log('login success')
            return Object.assign({}, state, {user_auth: true, authError: null});
        case 'LOGOUT_USER':
            console.log('sign out success')
            return Object.assign({}, state, {user_auth: false});
        case 'LOGIN_ERROR':
            console.log('login error')
            return Object.assign({}, state, {authError: 'Login Failed'});
        case 'SIGNIN_EMAIL_SET': return Object.assign({}, state, {email: action.payload});
        case 'SIGNIN_PW_SET': return Object.assign({}, state, {password: action.payload});
        case 'SIGNUP_SUCCESS':
            console.log('Signup success')
            return {
                ...state,
                authError: null,
                user_auth: true
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        default: return state;
    }
}

export default authState;