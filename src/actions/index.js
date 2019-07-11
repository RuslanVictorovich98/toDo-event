export const EVENT_CREATE   = "EVENT_CREATE";
export const EVENT_REMOVE   = "EVENT_REMOVE";
export const EVENT_EDIT     = "EVENT_EDIT";
export const EVENT_FINISH   = "EVENT_FINISH";
export const EVENT_ACTUAL   = "EVENT_ACTUAL";


export const create = (event) => {

    return {
        type: EVENT_CREATE,
        payload: event
    }
}

export const edit = (event, id) => {
    return {
        type: EVENT_EDIT,
        payload: event, 
        id: id
    }
}

export const remove = (event) => {
    return {
        type: EVENT_REMOVE, 
        payload: event
    }
}

export const finish = (event) => {
    return {
        type: EVENT_FINISH, 
        payload: event,
    }
}

export const actual = (event) => {
    // alert(event);

    return {
        type: EVENT_ACTUAL,
        payload: event
    }
}