class MyNode {
  data;
  left;
  right;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class MyBinarySearchTree {
  root;
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(data) {
    const newNode = new MyNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  printNode(node) {
    if (node !== null) {
      console.log("Node data:", node.data);
      console.log("Left child:", node.left ? node.left.data : "null");
      console.log("Right child:", node.right ? node.right.data : "null");
    } else {
      console.log("Node is null.");
    }
  }
}

(function main() {
  const BST = new MyBinarySearchTree();
  BST.insert(15);
  BST.insert(25);
  BST.insert(10);
  BST.printNode(BST.root);
})();
