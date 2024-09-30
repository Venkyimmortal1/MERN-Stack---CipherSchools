// # Lecture27-Basic-Functionalities-On-Tasks-Cipherschools

// Sir in this session discussed how to edit, cancel and save the user input data into the provided text blocks

// Task.js

import { useContext, useState } from "react";
import { formatDate } from "../utils/DateUtil";
import TaskContext from "../context/taskcontext";

const Task = ({ task: incomingTask}) => {

  const {title, description, createdDate, taskId} = incomingTask;
  const [deleteTask, editTask] = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(incomingTask);

  let handleInputChange=(e) =>{
    setTask({
        ...task, 
        [e.target.name]: e.target.value,
    });
    };

  if(isEditing){
    return (
      <div className="card">
      <div className="content">
      <div className="ui form">
        {/* <div className="header">{title}</div> */}
        <div className="field">
    <input type="text"
    spellCheck={false}
    data-ms-editor={true}
    placeholder="Task Title"
    name="title"
    onChange={handleInputChange}
    value={task.title}
    />
  </div>        
  <div className="meta">{formatDate(createdDate)}</div>
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
  </div>
        </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button" 
          onClick={() => {
            editTask(task);
          setIsEditing(false);
          }}
          >Save
          </div>
          <div className="ui basic red button" 
          onClick={() => setIsEditing(false)}>
            Cancel
            </div>
        </div>
      </div>
    </div>
    )

  }else{
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
        <div className="ui basic green button" 
        onClick={() => setIsEditing(true)}
        >Edit</div>
        <div className="ui basic red button" 
        onClick={() => deleteTask(taskId)}>
          Delete
          </div>
      </div>
    </div>
  </div>
        </>
    )
  }
};
export default Task;

// AddTask.js

import { useContext, useState } from "react";
import TaskContext from "../context/taskcontext";
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





