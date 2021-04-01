import {ADD_TASK, TOGGLE_REMINDER, DELETE_TASK, SET_INIT_TASKS } from "../actionTypes";
import cg from '../../util/consoleGroup';
const initialState = {
    tasks:[]
};


export default function(state = initialState, action) {
    switch(action.type){
        case 'ADD_TASK': {
            return {
                tasks: [...state.tasks, action.payload]
            }
        }
        case 'TOGGLE_REMINDER': {
            let tasksFromPrevState = [...state.tasks];
            return {
                tasks: tasksFromPrevState.map((task)=>{
                    if(task.id == action.payload.id){
                        task.reminder = !task.reminder;
                        return task;
                    } else {
                        return task;
                    }
                })
            }
        }
        case 'DELETE_TASK': {
            let tasksFromPrevState = [...state.tasks]; 
            return {
                tasks: tasksFromPrevState.filter((task)=>{
                    if(task.id !== action.payload.id){
                        return task;
                    }
                })
            }
        }
        case 'SET_INIT_TASKS': {
            return {
                tasks: action.payload
            }
        }
       default: {
           return state;
       }
    }
}