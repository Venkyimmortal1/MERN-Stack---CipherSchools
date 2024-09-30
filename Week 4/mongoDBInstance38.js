// # Lecture39--Creating-Instances-Of-Mongoose-For-Our-Project.-Cipherschools
// In this lecture we have been successful in createing an instance of Task in our mongoDB database with the DS_NAME = cs-mern and the file name = tasks

// The JS code we have used is :

// Creating Instances of task.

app.post("/add-task", async(req, res) =>{
    const task = new Task({title: "Test Task", Description: "Test Task desc"});
    await task.save();
    return res.status(201).send({message: "Saved!"})
});

//

// After creating the instance we have launched a thunderclient post request and have been succesful in getting the response.
