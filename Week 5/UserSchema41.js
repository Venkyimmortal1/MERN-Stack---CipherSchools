// # Lecture42--Creating-User-Models-In-MongoDB-Cipherschools
// In this lecture we have created a UserSchema and declared the parameters name, email, age and password which we would be using in further for the user-authentication by owner that we have already created.

// User.js

  const {model, Schema} = require("mongoose");
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
        required: true},

    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
    },
},
    {timestamps:true }
);

const User = model("User", UserSchema);

module.exports = User;
