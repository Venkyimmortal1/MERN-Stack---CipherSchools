# Lecture47--Adding-Middleware-To-Protect-Routes-Cipherschools
// In this lecture we have learned how to delete a user with the authentication 
// The JS code we have used is :

// user-controller.js

const User = require("../models/user");

const addNewUser = async (req, res) => {
try{
    const {name, email, age, password} = req.body;
    const user = new User({name, email, age, password});
    await user.save();
    const token = user.generateToken();
    return res.status(201).send({user, token});
}catch (err){
    console.error(err);
    return res.status(500).send({message: err.message});
}
};
const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findByEmailAndPasswordForAuth(email, password);
        const token = user.generateToken();
        console.info(`User with Email: ${email} successfully logged in.`)
        return res.status(200).send({user, token});
    }catch (err){
        console.error(err);
        return res.status(500).send({message: "Login Failed!"});
    }
};
const deleteUser = async(req, res)=> {
    const {user} = req;
    const userId = user._id;
    const deleteResult = await User.deleteOne({_id: userId});
    if(!deleteResult.deletedCount){
        console.error(
            `Delete faied! User with ID: ${userId} was not found.`
        );
        return res
        .status(404)
        .send({
            message: `Delete faied! User with ID: ${userId} was not found. `,

        });
    }
    console.info(`Delete Success: User with ID: ${userId} was deleted.`);
    return res.status(200).send({ message: "Delete Success!"});
};
module.exports = {loginUser, addNewUser, deleteUser};

// auth-middleware.js

const {verifyToken} = require("../jwt");

const authMiddleware = async(req, res, next) => {
    //{authorization: "Bearer <token>"}
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(400).send({message: "Please send a token."});
    }
    const token = authorization.substring(7);
    const {isValidToken, payload} = verifyToken(token);
    if(isValidToken) {
        console.log(`Token is valid!`);
        const user = await user.findOne({_id: payload._id});
        req.token = token;
        req.user = user;
        next();
    }else{
        console.warn(`token is invalid!`);
        return res.status(403).send({message : "Please use a valid token!"});
    }
};

module.exports = authMiddleware;

// user-routes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middleware/auth-middleware");

router.post("/login", userController.loginUser);
router.post("/signup", userController.addNewUser);
router.delete("/self", authMiddleware, userController.deleteUser);



module.exports = router;


// user.js

const {model, Schema} = require("mongoose");
const {isEmail} = require("validator");
const { encryptPassword, checkPassword } = require("../bcrypt");

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
            if(
                password.includes(" ") || 
                password.includes("\n") || 
                password.includes("\t") 
            ){
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
        const isMatch = await checkPassword(password, user.password)
        if(!isMatch){
            throw new Error("Invalid Credentials");
        }
        console.log(`Login Successful`)
        return user;
    }catch(err){
        console.error(err);
        throw err;
    }
};

UserSchema.pre("save", async function(next)  {
    const user = this;
    if (user.modifiedPaths().includes("password")){
        user.password = await encryptPassword(user.password);
    }
    next();
});

UserSchema.methods.generateToken = function() {
    const user = this;
    const token = generateToken({_id: user._id});
    return token;
};

const User = model("User", UserSchema);

module.exports = User;
