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

  removeAt(index) {
    if (index >= 0 < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        let previous = current.next;

        for (let i; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

const list = new LinkedList();
list.push(15); // { value: 15, next: null }
list.push(16); // { value: 15, next: { value: 16, next: null } }
console.log(list.removeAt(2));
