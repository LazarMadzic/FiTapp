import React from 'react'
import {useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import WorkoutForm from '../components/WorkoutForm'
import { getWorkouts,reset } from '../features/workouts/workoutSlice'
import Spinner from '../components/Spinner'
import WorkoutItem from '../components/WorkoutItem'
import '../index.css'

function Workouts() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    const { workouts, isLoading, isError, message } = useSelector(
      (state) => state.workouts
    )

  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getWorkouts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }





  return (
    <>
    <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Workouts</p>
    </section>
    
    <WorkoutForm/>

    <section className='content-wo'>
        {workouts.length > 0 ? (
          <div className='workouts'>
            {workouts.slice(0).reverse().map((workout) => (
              <WorkoutItem key={workout._id} workout={workout} />
            ))}
          </div>
        ) : (
          <h3>You have not set any workouts</h3>
        )}
      </section>

    </>
  )
}

export default Workouts