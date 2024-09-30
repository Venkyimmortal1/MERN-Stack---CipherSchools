# Lecture43--Creating-API-Routes-For-User-Signup-And-Login-Cipherschools
In this lecture we have created user with user-Details and validators to verify the input details through restraints
Through thunderclient we were also able to add user and make user login.

// user-routes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.post("/login", userController.loginUser);
router.post("/signup", userController.addNewUser);

module.exports = router;

// user-controller.js

const User = require("../models/user");

const addNewUser = async (req, res) => {
try{
    const {name, email, age, password} = req.body;
    const user = new User({name, email, age, password});
    await user.save();
    return res.status(201).send(user);
}catch (err){
    console.error(err);
    return res.status(500).send({message:err.message});
}
};
const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findByEmailAndPasswordForAuth(email, password);
        console.info(`User with Email: ${email} successfully logged in.`)
        return res.status(200).send(user);
    }catch (err){
        console.error(err);
        return res.status(500).send({message: "Login Failed!"});
    }
};
module.exports = {loginUser, addNewUser};

// user.js

const {model, Schema} = require("mongoose");
const {isEmail} = require("validator");

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true ,
        required: true,
        validate: {validator(email){
            return isEmail(email);
        }}
    },

    age: {
        type: Number,
        required: true,
        validate: {validator(age)
            {
                if(age < 0){
                    throw new Error(`Age must be +ve`);
                }
                return true;
            },
        },
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
        validate: { 
            validator(password){
            if(password.includes(" ") || password.includes("\n") || password.includes("\t") ){
                throw new Error(`Password includes space/tab/newline characters.`);
            }
            if(password.toLowerCase().includes("password")){
                throw new Error(`Password must not contain 'password'`);
            }
        },
    },
},
},
    {timestamps:true }
);

UserSchema.statics.findByEmailAndPasswordForAuth = async (email, password) => {
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error(`Invalid Credentials`);
        }
        if(password !== user.password){

        }
        console.log(`Login Successful`)
        return user;
    }catch(err){
        console.error(err);
        throw err;
    }
}

const User = model("User", UserSchema);

module.exports = User;


// task.js

const {model, Schema} = require("mongoose");

const TaskSchema = new Schema(
    {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    isComplete: {
        type: Boolean, 
        default: false,
    },
    owner: {
        type: Schema.Types.ObjectId, 
        require: true,
        ref: "User" },
    
},
{timestamps: true}
);

const TaskModel = model("Task", TaskSchema);
module.exports = TaskModel;




// Add New User
{
  "name":"John",
  "email":"John123.com",
  "age": 21,
  "password": "John1234"
}


// Login User

  {
  "eamil": "John123.com",
  "password": "John1234"
}

