import signUpreducer from "./signUpreducer";
import signinReducer from './siginReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    signup : signUpreducer,
    signin: signinReducer
})

export default rootReducer;