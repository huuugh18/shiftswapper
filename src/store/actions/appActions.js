export const setBottomNav = val => {
    console.log({val})
    return (dispatch, getState) => {
        switch(val){
            case 0: return dispatch({type:'SET_SHIFT_SCREEN',payload:'edit_shift'})
            case 1: return dispatch({type:'SET_SHIFT_SCREEN',payload:'add_shift'})
            default: throw 'val not found'
        }
    }
}