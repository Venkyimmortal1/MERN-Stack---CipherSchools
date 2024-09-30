// Lecture20-Creating-Functional-Components-Cipherschools

// ToDoScreen.js

import Task from "../Components/Task";
import { useState } from "react";
const ToDoScreen= () =>{
    const [taskList, setTaskList]= useState([]);
    return (
        <>
        <div className="screen">
        <h1 className="ui heading center">To Do List</h1>
        <div>
        <button 
        onClick={(e) => {
        setTaskList([
            ...taskList,
            {
        title: "Go to gym",
        description:"Going to gym is good for health.",
        },
        ]);
    }}
        className="ui secondary button">
            Add Task
            </button>
        {taskList.map((task) => (
            <Task />
            ))}
            </div>
        </div>
        </>
    )
    }

export default ToDoScreen;

// Task.js

const Task = () => {
    return <h6>Task</h6>;
}
export default Task;
