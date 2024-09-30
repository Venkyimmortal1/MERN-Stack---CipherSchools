// # Lecture40--Perform-CRUD-Operations.-Cipherschools
// In this lecture we have discussed and learnt how to Create, Read, Update and Delete the tasks in the mongoDB database by using the 
// Fuctions/Keywords Post, Get, Put, Delete respectively using thunder client extension.

// The JS code is as follows:

// app.js

require("./appMongoose");
const express = require("express");
const Task = require("./models/Task");
const app = express();

app.use(express.json());

// Displays .send text on the localhost link

app.get("/", (req, res) => {
    res.send("This is some response from your first Node.js server");
});

// Returns the sum of two numbers a and b.

app.get("/add", (req, res) => {
    let {a:firstNumber, b: secondNumber} = req.query;
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    res.send({sum});
});


// Creating Instances of task.

app.post("/add-task", async(req, res) => {
    const task = new Task({title: "Test Task", description: "Test Task Desc"});
    await task.save();
    return res.status(201).send({message: "Saved!"});
});

//

// Reading the instances of task

app.get("/get-tasks", async(req, res) => {
    const taskList = await Task.find();
    return res.status(200).send(taskList);
});

// 

// Updating the information of task (taskId here).

app.put("/update-task/:taskId", async(req, res) => {
    const {taskId} = req.params;
    const updateResult = await Task.updateOne(
        {_id: taskId}, 
        {
        $set: { ...req.body},
    }
);
if(!updateResult.matchedCount){
    return res
    .status(404)
    .send({message: `Task with ID: ${taskId} was not found.`});
}
return res.status(200).send({message: "Update Success"});
});

// Deleting task by it's ID.

app.delete("/delete-task/:taskId", async(req, res) => {
    const {taskId} = req.params;
    const deleteResult = await Task.deleteOne({_id: taskId});
if(!deleteResult.deletedCount){
    return res
    .status(404)
    .send({message: `Task with ID: ${taskId} was not found.`});
}
return res.status(200).send({message: "Delete Success"});
});


app.listen(8080, () => {
    console.log(`server is running.`);
});
