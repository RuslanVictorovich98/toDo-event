import {EVENT_CREATE, EVENT_REMOVE, EVENT_EDIT, EVENT_FINISH} from '../actions/index';

    const taskList = {
        actual: JSON.parse(localStorage.getItem("actual")),
        // finish: JSON.parse(localStorage.getItem("finish"))
    };

export default function taskListReducer (state = taskList.actual, action) {
    
    switch (action.type) {
        case EVENT_CREATE:
            
            
            if (!JSON.parse(localStorage.getItem("actual"))) {
                localStorage.setItem('actual',JSON.stringify([action.payload]))
                return JSON.parse(localStorage.getItem("actual"));
                
            } else {
                let x = [...state, action.payload];
                localStorage.setItem('actual',JSON.stringify(x))
                return JSON.parse(localStorage.getItem("actual"));
            }
            
            // console.log(x);

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

        case EVENT_FINISH:
            let finish_state = state;
            let finishStore =  JSON.parse(localStorage.getItem("finish"));
            let finishObject = Object.assign({}, finish_state.splice(action.payload, 1));
            
            console.log(finishStore);
            

            finishStore.push(finishObject["0"]);
            localStorage.setItem('finish', JSON.stringify(finishStore) )
            localStorage.setItem('actual', JSON.stringify(finish_state) )

            return JSON.parse(localStorage.getItem("actual"));
            
        default:
            return state;

    }
}

// 