import {FaTimes} from 'react-icons/fa'
import {useState} from 'react';

function Task({task, deleteTask, toggleReminder, justAdded}) {
    // let containerClass = 'task ';
    // if(task.reminder) containerClass = containerClass + 'reminder';

    let [jd, setJd] = useState(false);

    function deleteTaskInt(){
        setJd(true);
        setTimeout(()=>{
            deleteTask(task.id)
        },300);
    }


    return (
        <div className = {`animate__animated ${justAdded ? 'animate__slideInLeft animate__faster': ''}  ${jd ? 'animate__slideOutRight animate__faster': ''} task ${task.reminder ? 'reminder': ''}`} 
             onDoubleClick = {() => toggleReminder(task.id)}>
           <h3> {task.text} <FaTimes onClick = {() => deleteTaskInt()} /></h3>
           <p>{task.day}</p> 
        </div>
    )
}

export default Task


// Approach
//
// - Just Added
// - Just Deleted