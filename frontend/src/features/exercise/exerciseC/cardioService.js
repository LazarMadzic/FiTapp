import axios from 'axios'

const API_URL = '/api/cardios/'

// Create new cardio exercise
const createCardio = async (cardioData,  token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

	

	
  const {id_ex,text_ex,distance_ex,duration_ex,pace_ex} =cardioData


  const wD ={
    userwoid:id_ex,
    text:text_ex,
    distance:distance_ex,
    duration:duration_ex,
    pace:pace_ex,
  }
  console.log(cardioData)
  console.log(wD)
  const response = await axios.post(API_URL, cardioData, config)

  return response.data
}


//Update Cardio
const updateCardio= async(CardioId,CardioData, token) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  
  
  const response = await axios.put(API_URL+ CardioId,{text:CardioData}, config)

  return response.data
}

// Get user Cardios
const getCardios = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user Cardio
const deleteCardio = async (CardioId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + CardioId, config)

  return response.data
}



const cardioService = {
  createCardio,
  updateCardio,
  getCardios,
  deleteCardio,
}

export default cardioService