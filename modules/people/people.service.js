const{ Queue,display }= require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

//initialize a new empty queue
const people = new Queue();

// enqueue all the people in the store to the new people queue
store.people.forEach(person => people.enqueue(person))

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    let line = display(people);
    return line;
  },

  enqueue(person) {
    // Add a person to the queue.
     people.enqueue(person);
    //console.log(newPerson,'service new person')
    return people;

  },

  dequeue() {
    // Remove a person from the queue.
  }
}
