const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const verifyRoute = require('./routes/verify')

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})

//Middleware
app.use(express.json())
app.use(cors())

//Route middlewares
app.use('/api/user/register', registerRoute)
app.use('/api/user/login', loginRoute)
app.use('/api/user/verify', verifyRoute)

app.listen(PORT, ()=>console.log('Server running'))
