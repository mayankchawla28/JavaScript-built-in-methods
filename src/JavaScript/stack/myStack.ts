class MyStack {
  item;
  constructor() {
    this.item = [];
  }

  push(element) {
    return this.item.push(element);
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

  size() {
    return this.item.length;
  }

  contains(element) {
    return this.item.includes(element)
  }

  reverse() {
    this.item.reverse();
  }

  print() {
    let str = "";
    for (let i = 0; i < this.item.length; i++) {
      str += this.item[i] + " ";
    }
    return str;
  }
}
