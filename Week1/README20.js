// Lecture21-Working-With-Props-Cipherschools

//ToDoScreen

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
        title:"Go to gym",
        description:"Going to gym is good for health.",
        createdDate:new Date(),
        },
        ]);
    }}
        className="ui secondary button">
            Add Task
            </button>
            <section>
            <div class="ui cards">
        {taskList.map((task, index) => (
            <Task task={task} key={index}/>
        ))}
        
        </div>
        </section>
        </div>
        </div>
        </>
    )
    }

export default ToDoScreen;

//Dateutil

const dateFormatter=new Intl.DateTimeFormat("en-IN",
    {
    // dateStyle: "medium",
    hour12:false,
    hour:"numeric",
    minutes:"numeric",
    year:"numeric",
    month:"short",
    day:"2-digit",
    });
export const formatDate=(date) => dateFormatter.format(date);

//Task.js

import { formatDate } from "../utils/DateUtil";
const Task = ({ task: {title, description, createdDate}}) => {
    return (
        <>
        <div className="card">
    <div className="content">
      <div className="header">{title}</div>
      <div className="meta">{formatDate(createdDate)}</div>
      <div className="description">{description}</div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Edit</div>
        <div className="ui basic red button">Delete</div>
      </div>
    </div>
  </div>
        </>
    )
}
export default Task;











