const signupStateDefault = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}

const signupState = (state=signupStateDefault, action) => {
    switch(action.type){
        case 'SET_SIGNUP_FIELD': return Object.assign({}, state, action.payload)
        default: return state
    }
}

export default signupState;