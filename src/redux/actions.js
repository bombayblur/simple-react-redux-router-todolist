import {
    ADD_TASK,
    TOGGLE_REMINDER,
    DELETE_TASK,
    SET_INIT_TASKS
} from "./actionTypes";

export const addTask = (content) => {
    return {
        type: ADD_TASK,
        payload: content
    }
}

export const toggleReminder = (id) => {
    return {
        type: TOGGLE_REMINDER,
        payload: id
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const setInitTasks = (content)=>{
    return {
        type:SET_INIT_TASKS,
        payload: content
    }
}

// Write a thunk function here.
//
export const fetchTasks = () => {
    return async function (dispatch, getState) {
        let tasksList = await fetch('http://localhost:5000/tasks', {
            method: 'GET'
        });
        tasksList = await tasksList.json();
        dispatch(setInitTasks(tasksList));
    }
}