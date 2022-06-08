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
      // catches null && undefined
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

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  inset(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
}

const list = new LinkedList();
list.push(14); // { value: 14, next: null }
list.push(19); // { value: 14, next: { value: 19, next: null } }
list.push(15); // { value: 14, next: null }
console.log(JSON.stringify(list.head, null, 2));
console.log(list.head.key);
