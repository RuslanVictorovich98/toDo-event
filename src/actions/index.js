export const EVENT_CREATE = "EVENT_CREATE";
export const EVENT_REMOVE = "EVENT_REMOVE";
export const EVENT_EDIT = "EVENT_EDIT";


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
