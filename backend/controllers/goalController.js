// all the requests(controllers) here for a better and clean code 
// package express async handler : use the error handler and no trycatchs
// Desc => Get the goals
// Route => GET/api/goals
// Acces => private  
const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel')
const User = require('../models/userModel');


const getGoals =  asyncHandler(async (req, res, ) =>{
    const goals = await Goal.find({user : req.user.id})
    res.status(200).json(goals);
})  

// Desc => Set goal
// Route => pOST/api/goals
// Acces => private  
const setGoal = asyncHandler(async (req, res, ) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error('Please enter a goal')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(goal);
})

// Desc => Update goal
// Route => PUT/api/goals/:id
// Acces => private  
const updateGoal = asyncHandler(async (req, res, ) =>{
    const goal = await Goal.findById(req.params.id)
    if (!goal){
        response.status(400)
        throw new Error('Goal not found')

    }
    const user = await User.findById(req.user.id)
    // Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the current goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body ,{new:true})
    res.status(200).json(updatedGoal);
})  

// Desc => Deleting goal
// Route => GET/api/goals/:id
// Acces => private  
const deleteGoal = asyncHandler(async (req, res, ) =>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        response.status(400)
        throw new Error('Goal not found')
    }
     if (!goal){
        response.status(400)
        throw new Error('Goal not found')

    }
    const user = await User.findById(req.user.id)
    // Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the current goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }
    await goal.remove()
    res.status(200).json({id:req.params.id})
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}