const express = require('express')
const jsonBodyParser= require('body-parser').json()



const catsRouter = express.Router()

catsRouter
.get('/', (req, res) => {
  
    const testCat= {
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
      }


    res.json(testCat)
  
})

catsRouter
.post('/', jsonBodyParser, (req, res) => {
  

})

module.exports = catsRouter