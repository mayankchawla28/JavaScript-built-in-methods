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
}
