const mongoose = require('mongoose')

const exerciseStrengthSchema = mongoose.Schema(
  {
    userwoid: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'Workout',
    },
    userid:{
      type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User',

    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    sets:{
        type: Number,
        required: [true, 'Please add a text value'],

    },
    reps:{
        type: Number,
        required: [true, 'Please add a text value'],
    },
    weight:{
      type: Number,
      required: [true, 'Please add a text value'],
  },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('ExerciseStrength', exerciseStrengthSchema)