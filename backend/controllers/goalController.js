// all the requests(controllers) here for a better and clean code 
// Desc => Get the goals
// Route => GET/api/goals
// Acces => private  
const getGoals = (req, res, ) =>{

    res.status(200).json({message:'Get goals'});
}  

// Desc => Set goal
// Route => pOST/api/goals
// Acces => private  
const setGoal = (req, res, ) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error('Please enter a goal')
    }
    res.status(200).json({message:'Set goals'});
}  

// Desc => Update goal
// Route => PUT/api/goals/:id
// Acces => private  
const updateGoal = (req, res, ) =>{
    res.status(200).json({message:`Update goal ${req.params.id} `});
}  

// Desc => Deleting goal
// Route => GET/api/goals/:id
// Acces => private  
const deleteGoal = (req, res, ) =>{
    res.status(200).json({message:`Delete goal ${req.params.id} `});
}  



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}