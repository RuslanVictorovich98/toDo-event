// import {EVENT_FINISH} from '../actions/index';

const finishList = JSON.parse(localStorage.getItem("finish"));

export default function finishListReducer (state = finishList, action) {
    switch (action.payload) {

        // case EVENT_FINISH:
        //     alert("IS TRUE")
        //     return JSON.parse(localStorage.getItem("finish"));

        default: 

            // if (!JSON.parse(localStorage.getItem("finish"))) {
            //     localStorage.setItem('finish',JSON.stringify([{name: "Finish task!"}]))
            //     return state;
            // }
            // }   else {
            return state;
            // }
            
            
            } 

}