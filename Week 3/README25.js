// # Lecture26-Introduction-To-Context-Cipherschools

// ToDoScreen.js

import { useContext } from "react";
import Task from "../Components/Task";
import AddTask from "../Components/AddTask";
import TaskContext from "../context/taskcontext";
import {useNavigate} from "react-router-dom";

const ToDoScreen= () =>{
    const [taskList] = useContext(TaskContext);
    const navigate = useNavigate();

    return (
        <>

        <div className="screen">
        <h1 className="ui heading center">To Do List</h1>
        <div>
        <button 
        onClick={(e) => {
            navigate("/add-task")
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

// AddTask.js

import { useContext, useState } from "react";
import {TaskContext} from "../context/taskcontext";
import {useNavigate} from "react-router-dom";

const AddTask= () => {

    const {addNewTask}=useContext(TaskContext);
    const navigate = useNavigate();

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
        addNewTask(task);
        setTask({});
        navigate("/");
    };

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

// App.js

import AddTask from "./Components/AddTask";
import ToDoScreen from "./Screens/ToDoScreen";
import TaskProvider from "./context/taskcontext";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
  
const App=() => {
  const {taskList, addNewTask}= useContext(TaskContext);

  const router=createBrowserRouter([
    {
      path:"/",
      element: <ToDoScreen taskList={taskList}/>,
    },
    {
      path:"/add-task",
      element:<AddTask onSubmit={addNewTask}/>,
    }
  ]);

  return (
    <TaskProvider>
  <RouterProvider router={router}/>
  </TaskProvider>
  );
};
export default App;


