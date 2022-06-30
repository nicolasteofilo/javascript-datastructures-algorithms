import { Compare, defaultCompare } from '../utils.js'
import { Node } from "./models/node.js";

export class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.root = null
    }

    insert(key) {
        if(this.root === null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    /** @param {Node} node */
    insertNode(node, key) {
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if(node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if(node.right == null) {
                node.right = new Node(key)
            } else {
                console.log('right recursive')
                this.insertNode(node.right, key)
            }
        }
    }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(10)
tree.insert(12)
tree.insert(8)
console.log(tree.root);