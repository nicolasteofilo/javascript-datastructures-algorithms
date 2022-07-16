import { BinarySearchTree } from "./binary-search-tree.js";
import { defaultCompare, BalanceFactor } from "../utils.js";

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }

    // if result is not 0,1 or -1, this node is unbalanced
    // this concept is called balance factor
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }
}
