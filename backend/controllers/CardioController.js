const asyncHandler = require('express-async-handler')

const Cardio = require('../models/exerciseCardioModel')
const Workout =require('../models/workoutModel')
const User =require('../models/userModel')


// @desc    Get Cardio
// @route   GET /api/cardios
// @access  Private
const getCardios =asyncHandler( async(req,res) =>{

    const ca= await Cardio.find({userwoid: req.body.id})
    
    if(ca.length>=1){

        if (req.user.id.toString() !== ca[0].userid.toString()) {
            res.status(401)
            throw new Error('User not authorized')
        }
    }




    res.status(200).json(ca)
})

// @desc    Set Cardio
// @route   POST /api/cardios
// @access  Private
const setCardio =asyncHandler( async(req,res) =>{

    if (!req.body.text_ex) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    
    const ca = await Cardio.create({
        text_ex:req.body.text,
        userid:req.user.id,
        userwoid:req.body.userwoid,
        distance:req.body.dis,
        duration:req.body.time,
        pace:req.body.pace,
    } )
    console.log(ca.userid)
    res.status(200).json(ca)
})

// @desc    Update Cardio
// @route   PUT /api/cardios/:id
// @access  Private
const updateCardio =asyncHandler( async(req,res) =>{
    const ca = await Cardio.findById(req.params.id)
    
    if(!ca){
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
    if (req.user.id.toString() !== ca.userid.toString()) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const uwo = await Cardio.findByIdAndUpdate(req.params.id, req.body,{new: true})

    res.status(200).json(uwo)
})

// @desc    Delete Cardio
// @route   DELETE /api/cardios
// @access  Private
const deleteCardio =asyncHandler( async(req,res) =>{
    const ca = await Cardio.findById(req.params.id)
    
    if(!ca){
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
    if (req.user.id.toString() !== ca.userid.toString()) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await ca.remove()

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getCardios,
    setCardio,
    updateCardio,
    deleteCardio,
    }