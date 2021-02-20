import React from "react";
import { useState } from "react";

function AddTask({addTask}) {
  let [task, setTask] = useState("");
  let [date, setDate] = useState("");
  let [reminder, setReminder] = useState(false);

  function onSubmit(e) {
      e.preventDefault();

      let taskObject = {
          text:task,
          day:date,
          reminder:reminder
      }

      setTask("");
      setDate("");
      setReminder(false);

      addTask(taskObject);
  }

  return (
    <form className="add-form" onSubmit = {onSubmit}>
      <div className="form-control">
        <label htmlFor="taskname">Task</label>
        <input
          type="text"
          name="taskname"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="taskdate">Date & Time</label>
        <input
          type="text"
          name="taskdate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="remindercheck">Reminder</label>
        <input
          type="checkbox"
          name="remindercheck"
          checked={reminder}
          value={reminder}
          onChange={(e) => {
              setReminder(e.currentTarget.checked)
            }}
        />
      </div>
      <div>
        <input type="submit" className="btn btn-block" value="Add Task"/>
      </div>
    </form>
  );
}

export default AddTask;
