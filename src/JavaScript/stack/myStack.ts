
class MyStack {
  item;
  constructor() {
    this.item = [];
  }

  push(item) {
    return this.item.push(item);
  }

  pop() {
    return this.item.length > 0 ? this.item.pop() : "Underflow";
  }
}