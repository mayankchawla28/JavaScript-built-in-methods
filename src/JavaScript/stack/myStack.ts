
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

  peek() {
    return this.item[this.item.length - 1];
  }

  isStackEmpty() {
    return this.item.length == 0;
  }

  clear() {
    this.item = [];
  }
}