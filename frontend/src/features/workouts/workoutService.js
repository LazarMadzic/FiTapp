import axios from 'axios'

const API_URL = '/api/workouts/'

// Create new workout
const createWorkout = async (workoutData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, workoutData, config)

  return response.data
}

//Update Workout
const updateWorkout= async(workoutId,workoutData, token) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  
  const response = await axios.put(API_URL+ workoutId,{text:workoutData}, config)

  return response.data
}

// Get user Workouts
const getWorkouts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user Workout
const deleteWorkout = async (workoutId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + workoutId, config)

  return response.data
}

const workoutService = {
  createWorkout,
  updateWorkout,
  getWorkouts,
  deleteWorkout,
}

export default workoutService