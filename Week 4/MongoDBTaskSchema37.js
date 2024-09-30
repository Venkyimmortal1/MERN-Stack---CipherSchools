// # Lecture38--Understanding-Mongoose-Schemas-And-Models.-Cipherschools
// In this lecture we have created a task and schema for the task with data headings or Keys being title, description, isComplete and owner.
// The JS code we have used: 

// Task.js

const {model, Schema} = require("mongoose");

const TaskSchema = new Schema(
    {
    title: {
        type: String,
        required: true,
    },
    Description: {
        type: String, 
        required: true,
    },
    isComplete: {
        type: Boolean, 
        default: false,
    },
    // owner: {
    //     type: Schema.Types.ObjectId, 
    //     require: true,
    //     ref: "User" },
    
},
{timestamps: true}
);

const TaskModel = model("Task", TaskSchema);
module.exports = TaskModel;
