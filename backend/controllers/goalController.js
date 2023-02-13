// all the requests(controllers) here for a better and clean code 
// Desc => Get the goals
// Route => GET/api/goals
// Acces => private  
// package express async handler : use the error handler and no trycatchs
const asyncHandler = require('express-async-handler');
const getGoals =  asyncHandler(async (req, res, ) =>{

    res.status(200).json({message:'Get goals'});
})  

// Desc => Set goal
// Route => pOST/api/goals
// Acces => private  
const setGoal = asyncHandler(async (req, res, ) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error('Please enter a goal')
    }
    res.status(200).json({message:'Set goal'});
})

// Desc => Update goal
// Route => PUT/api/goals/:id
// Acces => private  
const updateGoal = asyncHandler(async (req, res, ) =>{
    res.status(200).json({message:`Update goal ${req.params.id} `});
})  

// Desc => Deleting goal
// Route => GET/api/goals/:id
// Acces => private  
const deleteGoal = asyncHandler(async (req, res, ) =>{
    res.status(200).json({message:`Delete goal ${req.params.id} `});
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}