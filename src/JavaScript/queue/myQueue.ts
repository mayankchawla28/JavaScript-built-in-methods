class MyQueue {
  items;
  constructor(itemArray = []) {
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
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  get value() {
    return this.items;
  }

  get size() {
    return this.items.length;
  }
}

(function main() {
  const queue = new MyQueue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.value);

  queue.dequeue();
  console.log(queue.value);

  console.log(queue.front());
})();
