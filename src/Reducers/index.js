import {combineReducers} from 'redux';
import taskListReducer from './list';
import finishListReducer from './finish-list';
import activeFinishReducer from './active-finish-list';



const allReducers = combineReducers ({
    list: taskListReducer,
    finishList: finishListReducer,
    activeFinish: activeFinishReducer,
});

export default allReducers;