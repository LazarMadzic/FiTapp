import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createWorkout } from '../features/workouts/workoutSlice'

function ExerciseItem() {

const dispatch = useDispatch()

  return (
    <div>ExerciseItem</div>
  )
}

export default ExerciseItem