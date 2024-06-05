class MyPriorityQueue {
  items;
  constructor(itemArray = []) {
    this.items = itemArray;
  }

  enqueue(element, priority) {
    let isAdded = false;
    for (let i = 0; i < this.size; i++) {
      if (this.items[i].priority > priority) {
        this.items.splice(i, 0, { element, priority });
        isAdded = true;
        break;
      }
    }
    if (!isAdded) {
      this.items.push({ element, priority });
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
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

  get clear() {
    return (this.items = []);
  }
}

(function main() {
  const pQueue = new MyPriorityQueue();
  console.log(pQueue.isEmpty());
  pQueue.enqueue("helloTwo", 2)
  pQueue.enqueue("helloThree", 2)
  pQueue.enqueue("helloOne", 1)
  console.log("1", pQueue.value);
  pQueue.dequeue();
  console.log("2", pQueue.value);
  pQueue.front();
  console.log("3", pQueue.value);
  console.log(pQueue.size);
})();
