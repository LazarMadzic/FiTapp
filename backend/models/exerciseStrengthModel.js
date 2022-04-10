const mongoose = require('mongoose')

const exerciseStrengthSchema = mongoose.Schema(
  {
    user: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'Workout',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    sets:{
        type: Number,

    },
    reps:{
        type: Number,
    },
    weigth:{
      type: Number,
  },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('ExerciseStrength', exerciseStrengthSchema)