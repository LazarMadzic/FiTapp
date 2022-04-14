const express = require('express')
const colors =require('colors')
const dotenv = require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port=process.env.PORT || 5000

connectDB()

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/workouts', require('./routes/workoutRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/cardios', require('./routes/CardioRoutes'))
app.use('/api/strengths', require('./routes/StrengthRoutes'))
app.use(errorHandler)

app.listen(port,() => console.log(`Server started on port ${port}`))



