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

  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }

  search(data) {
    return this.searchNode(this.root, data);
  }

  findMinRecord(node) {
    if (node === null) {
      throw new Error("Tree is empty");
    }
    if (!node.left) {
      return node.data
    }
    return this.findMinRecord(node.left);
  }

  get findMin() {
    return this.findMinRecord(this.root);
  }

  printTree(node = this.root, prefix = "", isLeft = true) {
    if (node) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
      console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);
      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}

(function main() {
  const BST = new MyBinarySearchTree();
  BST.insert(15);
  BST.insert(25);
  BST.insert(10);
  BST.insert(7);
  BST.insert(22);
  BST.insert(17);
  BST.insert(13);
  BST.insert(14);
  BST.insert(12);
  BST.insert(5);
  BST.insert(9);
  BST.insert(27);
  BST.printTree();
  console.log(BST.findMin);
  // BST.printNode(BST.root);
})();
