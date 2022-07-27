import { BinarySearchTree } from "./binary-search-tree.js";
import { defaultCompare, BalanceFactor, Compare } from "../utils.js";

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

    // the Max.max() return the higher number of parameters passed
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = tmp.node;
    return node;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  getBalanceFactor(node) {
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  /**
   * Left right case: rotate left then right
   * @param node Node<T>
   */
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  /**
   * Right left case: rotate right then left
   * @param node Node<T>
   */
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  insertNode(node, key) {
    // like BTS
    if (node === null) {
      this.root = new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // duplicated node
    }

    const balanceFactor = this.getBalanceFactor(node); // verify the balance factor
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      // if left side it is heavy
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      // if right side it is heavy
      if (this.compareFn(key, node.left.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node);
      } else {
        this.rotationRL(node);
      }
    }

    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node === null) {
      // if the key is the root
      return node;
    }

    // verify if the tree is balanced
    const balanceFactor = this.getBalanceFactor(node);
    if(balanceFactor === BalanceFactor.UNBALANCED_LEFT) { // if left side it is heavy
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if(balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLL(node); // simple rotation to right
      }
      if(balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left); // left rotation and after right rotation
      }
    }
    if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { // if right side it is heavy
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if(balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationRR(node) // simple rotation to left
      }
      if(balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right) // right rotation and after left rotation
      }
    }
  }

  inset(key) {
    this.root = this.insertNode(this.root, key);
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
}

const avl = new AVLTree();
avl.insert(2);
console.log(avl.root);
