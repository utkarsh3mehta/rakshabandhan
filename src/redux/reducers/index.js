import { combineReducers } from 'redux';
import sisterReducer from './sisterReducer'

export default combineReducers({
    sisters: sisterReducer,
});