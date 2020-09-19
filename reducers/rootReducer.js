import signUpreducer from "./signUpreducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    signup : signUpreducer
})

export default rootReducer;