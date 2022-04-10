const express = require('express')
const router = express.Router()
const {getCardios,setCardio, deleteCardio, updateCardio} = require('../controllers/CardioController')

const {protect} =require('../middleware/authMiddleware')

router.route('/').get(protect,getCardios).post(protect,setCardio)
router.route('/:id').delete(protect,deleteCardio).put(protect,updateCardio)


module.exports = router