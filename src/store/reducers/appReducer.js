const appStateDefault = {
    active_page: 'signIn',
    edit_shift_type_msg: '',
    shift_screen: 'edit_shift',
    user_selected_shift_type: null
}

const appState = (state=appStateDefault, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_SCREEN_SIGNIN': return Object.assign({}, state, {active_page: 'signin'});
        case 'SET_SCREEN_SIGNUP': return Object.assign({}, state, {active_page: 'signup'});
        case 'SET_SCREEN_USER_HOME': return Object.assign({}, state, {active_page: 'user_home'});
        case 'EDIT_SHIFT_TYPE_MSG': return Object.assign({}, state, {edit_shift_type_msg: action.payload})
        case 'SET_SHIFT_SCREEN': return Object.assign({},state, {shift_screen: action.payload})
        case 'SET_SELECTED_SHIFT_TYPE': return Object.assign({},state, {user_selected_shift_type: action.payload})
        default: return state
    }
}

export default appState;