class _Node {
  constructor(data, next) {
      this.data = data;
      this.next = next;
  }
}


class Queue {
  constructor() {
    this.first=null;
    this.last=null;
  }

  
  // Add data to the queue.
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
}


dequeue() {
  
  //if the queue is empty, there is nothing to return
 if (this.first === null) {
     return;
 }
 const node = this.first;
 this.first = this.first.next;
  //if this is the last item in the queue
 if (node === this.last) {
     this.last = null;
 }
 return node.value;
}
}
  // show() {
  //   // Return the next item in the queue.
  // }

  // all() {
  //   // Return all items in the queue.
  // }

  function peek(queue) {
    if (queue.first) {
        return queue.first.data;
    }
    return null;
}

function isEmpty(queue) {
    return queue.first === null;
}

function display(queue) {
    let result = [];
    let curr = queue.first;
    while (curr) {
        result.push(curr.data)
        curr = curr.next;
    }
    return result;
}

module.exports = {
    Queue: Queue,
    display: display,
    isEmpty: isEmpty,
    peek: peek
}

