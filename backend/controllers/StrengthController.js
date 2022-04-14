const asyncHandler = require('express-async-handler')

const Strength = require('../models/exerciseStrengthModel')
const Workout =require('../models/workoutModel')
const User =require('../models/userModel')


// @desc    Get Strength
// @route   GET /api/strengths
// @access  Private
const getStrengths =asyncHandler( async(req,res) =>{

    const st= await Strength.find({userwoid: req.body.id})
    
    if(st.length>=1){

        if (req.user.id.toString() !== st[0].userid.toString()) {
            res.status(401)
            throw new Error('User not authorized')
        }
    }




    res.status(200).json(st)
})

// @desc    Set Strength
// @route   POST /api/cardios
// @access  Private
const setStrength =asyncHandler( async(req,res) =>{

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const st = await Strength.create({
        text:req.body.text,
        userid:req.user.id,
        userwoid:req.body.userwoid,
        sets:req.body.sets,
        reps:req.body.reps,
        weight:req.body.weight,
    } )

    res.status(200).json(st)
})

// @desc    Update Strength
// @route   PUT /api/cardios/:id
// @access  Private
const updateStrength =asyncHandler( async(req,res) =>{
    const st = await Strength.findById(req.params.id)
    
    if(!st){
        res.status(400)

        throw new Error('Exercise not found')
    }
    
    const user = await User.findById(req.user.id)

    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')

    }
    
    // Make sure the logged in user matches the goal user
    if (req.user.id.toString() !== st.userid.toString()) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const uwo = await Strength.findByIdAndUpdate(req.params.id, req.body,{new: true})

    res.status(200).json(uwo)
})

// @desc    Delete Strength
// @route   DELETE /api/cardios
// @access  Private
const deleteStrength =asyncHandler( async(req,res) =>{
    const st = await Strength.findById(req.params.id)
    
    if(!st){
        res.status(400)

        throw new Error('Exercise not found')
    }
    
     
    const user = await User.findById(req.user.id)
    
    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')

    }

    // Make sure the logged in user matches the goal user
    if (req.user.id.toString() !== st.userid.toString()) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await st.remove()

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getStrengths,
    setStrength,
    updateStrength,
    deleteStrength,
    }