const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema(
  {
   // user: {
   //   type: mongoose.Schema.Types.ObjectId,
   //   required: true,
   //   ref: 'User',
   // },
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
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Workout', workoutSchema)