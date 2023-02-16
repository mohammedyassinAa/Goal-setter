// all the requests(controllers) here for a better and clean code 
// package express async handler : use the error handler and no trycatchs
// Desc => Get the goals
// Route => GET/api/goals
// Acces => private  
const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel')

const getGoals =  asyncHandler(async (req, res, ) =>{
    const goals = await Goal.find()
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
        text: req.body.text
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
    await goal.remove()
    res.status(200).json({id:req.params.id})
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}