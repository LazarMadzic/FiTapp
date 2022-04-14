const mongoose = require('mongoose')

const exerciseCardioSchema = mongoose.Schema(
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