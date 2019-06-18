const authStateDefault = {
    user_auth: false,
    email: '',
    password: '',
    authError: null
}

const authState = (state=authStateDefault, action) => {
    switch(action.type){
        case 'LOGIN_USER': return Object.assign({}, state, {user_auth: true, authError: null});
        case 'LOGOUT_USER': return Object.assign({}, state, {user_auth: false});
        case 'LOGIN_ERROR': return Object.assign({}, state, {authError: 'Login Failed'});
        case 'SIGNIN_EMAIL_SET': return Object.assign({}, state, {email: action.payload});
        case 'SIGNIN_PW_SET': return Object.assign({}, state, {password: action.payload});
        default: return state;
    }
}

export default authState;