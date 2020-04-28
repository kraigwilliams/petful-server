const express = require('express');
//const json = express.json();
const jsonBodyParser= require('body-parser').json()
const { dogs } = require('../../store');
const {Queue}= require('../queue/Queue');
const dogsRouter = express.Router();





const dogQueue = new Queue();

dogs.forEach(dog => dogQueue.enqueue(dog));

dogsRouter
.route('/')
.get( (req, res) => {
      //  let firstDog = peek(dogQueue);
        // return res.status(200).json({
        //     dog: firstDog
        // })
    res.json(dogs)
    })

    //adopt a dog
// dogsRouter.delete('/',json, (req, res) => {
    
//     let adoptedDog = dogsQueue.dequeue();
//     dogQueue.enqueue(adoptedDog);
    
//     return res.send({
//         adopted: adoptedDog
//     })
// }) ;


module.exports = dogsRouter;
