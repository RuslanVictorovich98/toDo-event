import {combineReducers} from 'redux';
import taskListReducer from './list';


const allReducers = combineReducers ({
    list: taskListReducer
});

export default allReducers;