const appStateDefault = {
    active_page: 'signIn'
}

const appState = (state=appStateDefault, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_SCREEN_SIGNIN': return Object.assign({}, state, {active_page: 'signin'});
        case 'SET_SCREEN_SIGNUP': return Object.assign({}, state, {active_page: 'signup'});
        case 'SET_SCREEN_USER_HOME': return Object.assign({}, state, {active_page: 'user_home'});

        default: return state
    }
}

export default appState;