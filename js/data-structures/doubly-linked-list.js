import { Node } from "./models/node.js";
import { LinkedList } from "./linked-list.js";
import { defaultEquals } from "../utils.js";

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor(equalFn = defaultEquals) {
    super(equalFn);
    this.tail = undefined;
  }
}
