const express = require('express')
const router = express.Router()
const {getStrengths, setStrength, deleteStrength, updateStrength} = require('../controllers/StrengthController')

const {protect} =require('../middleware/authMiddleware')

router.route('/').get(protect,getStrengths).post(protect,setStrength)
router.route('/:id').delete(protect,deleteStrength).put(protect,updateStrength)


module.exports = router