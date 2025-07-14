
import React, { useState } from "react";
import './ToDoList.css';

function ToDoList(){
    const [tasks,setTasks]=useState([])
    let [newTask,setNewTask]=useState("")
    function handleNewTask(event){
        setNewTask(event.target.value); 
    }
    function addTask(){
        if (newTask.trim() === "") return;
        setTasks(t => [...t, { text: newTask, completed: false }])
        setNewTask("");
        console.log(tasks)
    }
function toggleTask(index) {
  setTasks(tasks =>
    tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
  );
}
  return (
    <div className="todo-container">
      <h2>My To-Do List</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter new Task"
          value={newTask}
          onChange={handleNewTask}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? "completed" : ""}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;