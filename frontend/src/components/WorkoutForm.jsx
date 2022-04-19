import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createWorkout } from '../features/workouts/workoutSlice'
import './Header.css'

function WorkoutForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
    
        dispatch(createWorkout({ text }))
        setText('')
      }


  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
         
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='user-btn btn-block' type='submit'>
           <p> Add Workout</p>
          </button>
        </div>
      </form>
    </section>
  )
}

export default WorkoutForm