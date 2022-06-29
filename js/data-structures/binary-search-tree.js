import { Compare, defaultCompare } from '../utils.js'
import { Node } from "./models/node.js";

export class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.root = null
    }
}