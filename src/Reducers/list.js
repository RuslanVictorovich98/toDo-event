import {EVENT_CREATE, EVENT_REMOVE, EVENT_EDIT} from '../actions/index';

    const taskList = {
        actual: JSON.parse(localStorage.getItem("actual")),
        // finish: JSON.parse(localStorage.getItem("finish"))
    };

export default function taskListReducer (state = taskList.actual, action) {
    
    switch (action.type) {
        case EVENT_CREATE:
            let x = [...state, action.payload];
            localStorage.setItem('actual',JSON.stringify(x))

            return JSON.parse(localStorage.getItem("actual"));

        case EVENT_EDIT:
            let edit_state = state.slice();
            edit_state[action.id] = action.payload;

            localStorage.setItem('actual', JSON.stringify(edit_state) )
            return JSON.parse(localStorage.getItem("actual"));
            // return edit_state;


        case EVENT_REMOVE:
          
            let remove_state = state;
            remove_state.splice(action.payload, 1);
            localStorage.setItem('actual', JSON.stringify(remove_state) )
            return JSON.parse(localStorage.getItem("actual"));
            // return state.splice(action.payload, 1),[...state];

            
            
        default:
            return state;

    }
}

// 