class MyQueue {
  items;
  constructor (itemArray = []) {
    this.items = itemArray;
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "UnderFlow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue.";
    }
    this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }


  get size() {
    // Return the number of elements in the queue
    return this.items.length;
  }
}
