const mongoose = require('mongoose')

const exerciseCardioSchema = mongoose.Schema(
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
    distance:{
        type: Number,
        required: [true, 'Please add a text value'],

    },
    duration:{
        type: Number,
        required: [true, 'Please add a text value'],
    },
    pace:{
      type: Number,
      required: [true, 'Please add a text value'],
  },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('ExerciseCardio', exerciseCardioSchema)