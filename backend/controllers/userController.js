const jwt = require('jsonwebtoken');
// To hash our password :
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


// Desc => register nw user
// Route => POST/api/users
// Acces => Public  
const registerUser =  asyncHandler ( async (req, res) => {
    const { name , email , password } = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    // Check if user exists 
    const userExists = await User.findOne({ email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt) 
    // Create User 
    const user = await User.create({ 
        name,
        email,   
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id : user._id ,
            name : user.name ,
            email : user.email,          
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }

});
// Desc => Authenticate a user
// Route => POST/api/users/login
// Acces => Public  
const loginUser = asyncHandler (async (req, res) => {
    const { email , password } = req.body;
    // check for user email
    const user = await User.findOne({ email})

    if (user && (bcrypt.compare(user.password, password))){
         res.json({
            _id : user._id ,
            name : user.name ,
            email : user.email,          
        })
        
    }else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
});
// Desc => Get user Data 
// Route => GET/api/users/me
// Acces => Public  
const getMe = asyncHandler ( async (req, res) => {
  res.json({ message: " user Data" });
});






module.exports = { 
    registerUser,
    loginUser,
    getMe
 };
