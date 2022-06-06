import { defaultEquals } from "../utils.js";
import { Node } from "./models/node.js";
export default class LinkedList {
  constructor(equalFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalFn = equalFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  print() {
    console.log(this.head);
    return this.head;
  }
}

const list = new LinkedList();
list.push(15);
list.push(16);
