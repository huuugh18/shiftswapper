import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase'
import rootReducer from './reducers/rootReducer';

// const fbConfig = {
//   apiKey: "AIzaSyDK5DXNoahQ2oVEsEY6ec4oH3Rz3DUUB0I",
//   authDomain: "shiftswapper-5ebe4.firebaseapp.com",
//   databaseURL: "https://shiftswapper-5ebe4.firebaseio.com",
//   projectId: "shiftswapper-5ebe4",
//   storageBucket: "shiftswapper-5ebe4.appspot.com",
//   messagingSenderId: "806305888353",
//   appId: "1:806305888353:web:80d9cb958aacc2ec"
// } // your firebase config


// ------------ LOGGER -------------
const logger = store => next => action => {
  console.group(action.type);
  console.log('%c prev state', 'color: gray', store.getState());
  console.log('%c action', 'color: blue', action);
  let result = next(action);
  console.log('%c next state', 'color: green', store.getState());
  console.groupEnd(action.type);
  return result
}


const middlewares = [
  thunk.withExtraArgument(getFirebase,logger)
]
const store = createStore(
  rootReducer,
  // {},
  compose(
    applyMiddleware(...middlewares),
  )
);

export default store;