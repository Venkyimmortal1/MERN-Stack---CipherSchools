// # Lecture24-Two-Way-Binding-Cipherschools
//We discussed two way binding and adding new task and printing the task with the user input title and description.
//ToDoScreen.js

import AddTask from "../Components/AddTask";
import Task from "../Components/Task";
import { useState } from "react";
const ToDoScreen= () =>{
    const [taskList, setTaskList]= useState([]);
    let addNewTask=(task) => {
        setTaskList([...taskList, {...task, createdDate: new Date()}]);
    };
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
            <div className="ui cards">
        {taskList.map((task, index) => (
            <Task task={task} key={index}/>
        ))}
        
        </div>
        </section>
        </div>
        <AddTask onSubmit={addNewTask}/>
        </div>
        </>
    )
    }

export default ToDoScreen;

//AddTask.js

import { useState } from "react";
const AddTask= (onSubmit) => {
    const [task, setTask]=useState({
        title:"",
        description:"",
    })
    let handleInputChange=(e) =>{
        // console.log(e.target.value);
        // console.log(e.target.title);
        setTask({
            ...task, [e.target.name]: e.target.value,
        });

    };
    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        onSubmit(task);
    }
    return( <>
    <h3 className="ui heading center">Add New Task</h3>
    <div className="ui form">
    <form onSubmit={onFormSubmit}>
    <div className="field">
    <label>Title</label>
    <input type="text"
    spellCheck={false}
    data-ms-editor={true}
    placeholder="Task Title"
    name="Title"
    onChange={handleInputChange}
    value={task.title}
    />
  </div>
         <div className="field">
    <label>Description</label>
    <textarea 
    rows="2" 
    spellCheck="false" 
    data-ms-editor="true"
    placeholder="Task Description"
    name="Description"
    onChange={handleInputChange}
    value={task.description}
    ></textarea>
  </div>
  <button type="submit" className="ui primary button">
  Submit
</button>
    </form>
    </div>
    </>
    );
};
export default AddTask;
