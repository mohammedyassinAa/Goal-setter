const express = require("express");
const router = express.Router();
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} = require("../controllers/goalController");
const {protect} = require("../middleware/authMiddlware")





// Get and set goals
router
    .route("/")
    .get(protect,getGoals)
    .post(protect,setGoal);

// Update and Delete Goal
router
    .route("/:id")
    .put(protect,updateGoal)
    .delete(protect,deleteGoal);

module.exports = router;
