import { Compare, defaultCompare } from "../utils.js";
import { Node } from "./models/node.js";

export class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  /** @param {Node} node */
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  minNode(node) {
    let current = node;
    if (node != null) {
      while (current != null && current.left != null) {
        current = current.left;
      }
      return current;
    }
    return undefined;
  }

  maxNode(node) {
    let current = node;
    if (node != null) {
      while (current != null && current.right != null) {
        current = current.right;
      }
      return current;
    }
    return undefined;
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }
    
    if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  min() {
    return this.minNode(this.root);
  }

  max() {
    return this.maxNode(this.root);
  }

  search(key) {
    console.log(key)
    return this.searchNode(this.root, key);
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(6);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

// console.log(tree.root);

const printNode = (value) => console.log(value);
// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);
// console.log(tree.min());
// console.log(tree.max());
console.log(tree.search(18));
