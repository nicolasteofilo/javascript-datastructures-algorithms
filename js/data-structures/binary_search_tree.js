const COMPARISON = {
  EQUAL: 0,
  SMALLER: -1,
  GREATER: 1,
};

const defaultCompareNumberFn = (a, b) => {
  if (Number(a) == Number(b)) {
    return COMPARISON.EQUAL;
  }

  return Number(a) < Number(b) ? COMPARISON.SMALLER : COMPARISON.GREATER;
};

class TreeNode {
  constructor(value, parent) {
    this.value = value.toString();
    // this.parent = parent || null;
    this.left = null;
    this.right = null;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.left;
  }
}
class BinarySearchTree {
  root;
  compareFn;
  constructor(compareFn = defaultCompareNumberFn) {
    this.root = null;
    this.compareFn = compareFn;
  }

  insert(value) {
    let node = this.root;
    let insertedNode;

    // if tree is empty
    if (node === null) {
      this.root = new TreeNode(value);
      return this.root;
    }

    while (true) {
      const comparison = this.compareFn(value, node.value);
      if (comparison === COMPARISON.EQUAL) {
        insertedNode = node;
        return node;
      }
      if (comparison === COMPARISON.SMALLER) {
        if (node.left === null) {
          insertedNode = new TreeNode(value, node);
          node.left = insertedNode;
          return true;
        }
        node = node.left;
      } else if (comparison === COMPARISON.GREATER) {
        if (node.right === null) {
          insertedNode = new TreeNode(value, node);
          node.right = insertedNode;
          return true;
        }
        node = node.right;
      } else {
        return false;
      }
    }
  }

  remove(value, node) {}
  min(node = this.root) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max(node = this.root) {
    while (node && node.right !== null) {
      node = node.right;
    }
    return node;
  }

  inOrderTraverse(node = this.root, callback = (value) => {}, traverserd = []) {
    if (node === null) {
      return traverserd;
    }
    if (node.left) {
      callback(node.left);
      traverserd.push(...this.inOrderTraverse(node.left));
    }
    callback(node);
    traverserd.push(node);
    if (node.right) {
      callback(node.right);
      traverserd.push(...this.inOrderTraverse(node.right));
    }
    return traverserd;
  }
  preOrderTraverse(node = this.root, traverserd = []) {}
  postOrderTraverse(node = this.root, traverserd = []) {}
}

export default BinarySearchTree;

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(12);
tree.insert(10);
tree.insert(9);
tree.insert(14);
tree.insert(13);
tree.insert(15);
tree.insert(8);
console.log(JSON.stringify(tree.root, null, 2));
console.log("min -->", tree.min().value);
console.log("max -->", tree.max().value);
console.log("inOrderTraverse -->", tree.inOrderTraverse());
