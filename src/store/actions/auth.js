export const loginUser = () => {
    console.log('login')
    return {type: 'LOGIN_USER'}
}

export const logoutUser = () => {
    console.log('logout')
    return {type: 'LOGOUT_USER'}
}