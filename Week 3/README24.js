// # Lecture25-Routing-In-React-Cipherschools

// ToDoScreen.js

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
        {/* <AddTask onSubmit={addNewTask}/> */}
        </div>
        </>
    )
    }

export default ToDoScreen;

//App.js

import { useState } from "react";
import AddTask from "./Components/AddTask";
import ToDoScreen from "./Screens/ToDoScreen";
  import {createBrowserRouter, RouterProvider} from "react-router-dom";
  const router=createBrowserRouter([
    {
      path:"/",
      element: <ToDoScreen/>,
    },
    {
      path:"/add-task",
      element:<AddTask/>
    }
  ]);
  
const App=() => {
  conat [tasks,setTasks] useState([]);
  return <RouterProvider router={router}/>;
};
export default App;

// AddTask.js

import { useState } from "react";
const AddTask= (onSubmit) => {
    const [task, setTask]=useState({
        title:"",
        description:"",
    });
    let handleInputChange=(e) =>{
        setTask({
            ...task, 
            [e.target.name]: e.target.value,
        });
        
    };
    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        onSubmit(task);
    }
    return( 
        <section className="screen">
    <h3 className="ui heading center">Add New Task</h3>
    <div className="ui form">
    <form onSubmit={onFormSubmit}>
    <div className="field">
    <label>Title</label>
    <input type="text"
    spellCheck={false}
    data-ms-editor={true}
    placeholder="Task Title"
    name="title"
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
    name="description"
    onChange={handleInputChange}
    value={task.description}
    ></textarea>
  </div>
  <button type="submit" className="ui primary button">
  Submit
</button>
    </form>
    </div>
    </section>
    );
};
export default AddTask;



