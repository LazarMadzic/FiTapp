const asyncHandler = require('express-async-handler')

const Workout =require('../models/workoutModel')
const User =require('../models/userModel')

// @desc    Get Workout
// @route   GET /api/workouts
// @access  Private
const getWorkout =asyncHandler( async(req,res) =>{
    const wo= await Workout.find({user: req.user.id})



    res.status(200).json(wo)
})

// @desc    Set Workout
// @route   POST /api/workouts
// @access  Private
const setWorkout =asyncHandler( async(req,res) =>{

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const wo = await Workout.create({
        text:req.body.text,
        user:req.user.id
    } )

    res.status(200).json(wo)
})

// @desc    Update Workout
// @route   PUT /api/workouts/:id
// @access  Private
const updateWorkout =asyncHandler( async(req,res) =>{
    const wo = await Workout.findById(req.params.id)
    
    if(!wo){
        res.status(400)

        throw new Error('Workout not found')
    }
    
    const user = await User.findById(req.user.id)

    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')

    }

    // Make sure the logged in user matches the goal user
    if (wo.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const uwo = await Workout.findByIdAndUpdate(req.params.id, req.body,{new: true})

    res.status(200).json(uwo)
})

// @desc    Delete Workout
// @route   DELETE /api/workouts
// @access  Private
const deleteWorkout =asyncHandler( async(req,res) =>{
    const wo = await Workout.findById(req.params.id)
    
    if(!wo){
        res.status(400)

        throw new Error('Workout not found')
    }
    
     
    const user = await User.findById(req.user.id)

    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')

    }

    // Make sure the logged in user matches the goal user
    if (wo.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await wo.remove()

    res.status(200).json({id: req.params.id})
})



module.exports = {
getWorkout,
setWorkout,
updateWorkout,
deleteWorkout
}