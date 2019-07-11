import {EVENT_ACTUAL} from '../actions/index';


const activeFinish = true;

export default function activeFinishReducer (state = activeFinish, action) {
    switch (action.type) {

        case EVENT_ACTUAL:
            return action.payload;

        default: 
            return state;
    }
}