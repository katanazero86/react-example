import { combineReducers } from 'redux';
import number from './numberModule/index.js';
import request from './saga/request/index.js';

export default combineReducers({
    number,
    request
});