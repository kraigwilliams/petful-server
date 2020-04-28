const express = require('express')
const cors = require('cors')
const catsRouter= require('../cats/cats.router')
const dogsRouter = require('../dogs/dogs.router')
const app = express()

app.use(cors())

// app.use(cors({
//     origin: CLIENT_ORIGIN
//   });

app.use('/api/people', require('../people/people.router'))
app.use('/api/pets', require('../pets/pets.router'))

app.use('/api/cat',catsRouter)
app.use('/api/dog',dogsRouter)
//app.use('/dog', require('../pets/pets.router'))

app.get('/',(req,res)=>{
    console.log('started')
    res.status(200).send("Hello World.")
    })

module.exports = app
