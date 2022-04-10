const express = require('express')
const router = express.Router()
const {getWorkout,setWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController')

const {protect} =require('../middleware/authMiddleware')

router.route('/').get(protect,getWorkout).post(protect,setWorkout)
router.route('/:id').delete(protect,deleteWorkout).put(protect,updateWorkout)



//router.get('/',getWorkout)

//router.post('/',setWorkout)

//router.put('/:id',updateWorkout)

//router.delete('/:id',deleteWorkout)

module.exports = router