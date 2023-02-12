const express = require("express");
const router = express.Router();
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} = require("../controllers/goalController");




// Get and set goals
router
    .route("/")
    .get(getGoals)
    .post(setGoal);

// Update and Delete Goal
router
    .route("/:id")
    .put(updateGoal)
    .delete(deleteGoal);

module.exports = router;
