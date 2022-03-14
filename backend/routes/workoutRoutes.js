const express = require('express')
const router = express.Router()
const {getWorkout,setWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController')

//router.route('/').get(getWorkout).post(setWorkout)
//router.route('/:id').delete(deleteWorkout).put(updateWorkout)

router.get('/',getWorkout)

router.post('/',setWorkout)

router.put('/:id',updateWorkout)

router.delete('/:id',deleteWorkout)

module.exports = router