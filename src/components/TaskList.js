import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTaskButton }) {

  let countId = 0;




  const renderingTask = tasks.map((task) => {
    // countId++
    return (
      <div>
        <Task key={task.text} task={task} deleteTaskButton={deleteTaskButton} />
      </div>
    )
  })

  // console.log({ tasks })



  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {renderingTask}
    </div>
  );
}

export default TaskList;
