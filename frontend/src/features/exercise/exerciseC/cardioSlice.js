import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cardioService from './cardioService'

const initialState = {
  cardios: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// Create new cardio
export const createCardio = createAsyncThunk(
    'cardios/create',
    async (cardioData, thunkAPI) => {
      try {

        const token = thunkAPI.getState().auth.user.token
        console.log(token)
        return await cardioService.createCardio(cardioData, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  // Get user cardios
  export const getCardios = createAsyncThunk(
    'cardios/getAll',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await cardioService.getWorkouts(token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const cardioSlice = createSlice({
    name: 'cardio',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createCardio.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createCardio.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.workouts.push(action.payload)
        })
        .addCase(createCardio.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
        .addCase(getCardios.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getCardios.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.workouts = action.payload
        })
        .addCase(getCardios.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })


    },
})

export const { reset } = cardioSlice.actions
export default cardioSlice.reducer