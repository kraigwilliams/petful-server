const express = require('express')
const jsonBodyParser= require('body-parser').json()
const {people}= require('../../store')
const peopleService = require('./people.service')
const {Queue,display} = require('../queue/Queue')

//let peopleQueue= new Queue()

// people.forEach(person=>{
//   peopleQueue.enqueue(person)
// })

const peopleRouter = express.Router()

peopleRouter
.route('/')


.post( jsonBodyParser, async(req, res) => {
  // Add a new person to the queue.
const {newPerson}= req.body
console.log(newPerson,"newPerson")
 let peopleQueue=  await peopleService.enqueue(newPerson)
console.log(peopleQueue,'people queue')
res.json(peopleQueue)

})

.get( (req, res) => {
  
 const line= peopleService.get()
 
  //console.log(peopleQueue,'people queue')
  // let line = display(peopleQueue);
 // console.log(people,"people")
  return res.status(200).json(line)
 
  // Return all the people currently in the queue.
// res.json(people)

  
})


module.exports = peopleRouter
