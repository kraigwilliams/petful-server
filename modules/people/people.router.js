const express = require('express')
const jsonBodyParser= require('body-parser').json()
const {people}= require('../../store')
const peopleService = require('./people.service')
const Queue = require('../queue/Queue')

const peopleQueue= new Queue()

people.forEach(person=>{
  peopleQueue.enqueue(person)
})

const peopleRouter = express.Router()

peopleRouter
.route('/')
.get( (req, res) => {
  console.log(people,"people")
  // Return all the people currently in the queue.
  res.json(people)

  
})

.post( jsonBodyParser, (req, res) => {
  // Add a new person to the queue.
const {newPerson}= req.body
console.log(newPerson)
peopleQueue.enqueue(newPerson, "newPerson")

})



module.exports = peopleRouter
