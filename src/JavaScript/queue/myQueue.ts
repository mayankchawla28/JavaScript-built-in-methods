class MyQueue {
  items;
  constructor (itemArray = []) {
    this.items = itemArray;
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {}

  front() {}

  isEmpty() {}


  get size() {
    // Return the number of elements in the queue
    return this.items.length;
  }
}
