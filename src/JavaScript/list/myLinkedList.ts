class MyLinkedListNode {
  value;
  next;
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  head;
  tail;
  length;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushEnd(value) {
    const newNode = new MyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

(function main() {
  const myList = new LinkedList();
  myList.pushEnd(10);
  myList.pushEnd(20);
  myList.pushEnd(30);
  console.log(myList);
})();
