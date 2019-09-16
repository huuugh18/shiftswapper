function deleteEvent(state,action){
  const o = Object.freeze(state)
  const newState = Object.assign({},state)
  delete newState[action.payload]
  return newState
}


function reducer(state={}, action) {
    switch (action.type) {
        case 'ADD_EVENT':       return Object.assign({},state, {[action.payload.key]:action.payload})
        case 'EDIT_EVENT':      return Object.assign({},state, {[action.payload.key]:action.payload.value})
        case 'DELETE_EVENT':    return deleteEvent(state,action)
    }
    return state
}

export default reducer