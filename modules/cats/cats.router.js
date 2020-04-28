const express = require('express')
const jsonBodyParser= require('body-parser').json()
const { cats } = require('../../store');
const {Queue}= require('../queue/Queue');

const catsRouter = express.Router()

const catQueue = new Queue();

cats.forEach(cat => catQueue.enqueue(cat));

catsRouter
.route('/')
.get( (req, res) => {
  
    // const testCat= {
    //     imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    //     imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    //     name: 'Fluffy',
    //     sex: 'Female',
    //     age: 2,
    //     breed: 'Bengal',
    //     story: 'Thrown on the street'
    //   }


    res.json(cats)
  
})

catsRouter
.post('/', jsonBodyParser, (req, res) => {
  

})

module.exports = catsRouter