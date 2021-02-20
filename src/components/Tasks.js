import Task from './Task';
import {useEffect} from 'react';

function Tasks({tasks, deleteTask, toggleReminder}) {

    if(tasks.length < 1){
        return (
            <div>
                <p>No tasks available</p>
            </div>
        )
    }
    console.log(tasks);
    return (
        <div>
            {tasks.map((task, index)=>{
                return <Task key = {task.id}
                             task = {task} 
                             deleteTask = {deleteTask}
                             toggleReminder = {toggleReminder}
                             justAdded = {task.justAdded}
                             />
            })}
        </div>
    )
}

export default Tasks
