//Lecture22-Getting-User-Input-Cipherschools
//We added two user-input blocks Title and Description and Submit button and were able to acquire the user input
//AddTask.js

const AddTask= () => {
    return( <>
    <h3 className="ui heading center">Add New Task</h3>
    <div className="ui form">
    <form>
    <div className="field">
    <label>Title</label>
    <input type="text"
    spellCheck="false" 
    data-ms-editor="true"
    placeholder="Task Title"
    name="Title"
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
    ></textarea>
  </div>
  <button className="ui primary button">
  Submit
</button>
    </form>
    </div>
    </>
    );
};
export default AddTask;
