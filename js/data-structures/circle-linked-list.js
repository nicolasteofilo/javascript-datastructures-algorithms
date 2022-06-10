import { defaultEquals } from "../utils.js";
import { LinkedList } from "./linked-list.js";
import { Node } from "./models/node.js";

export class CircleLinkedList extends LinkedList {
  constructor(equalFn = defaultEquals) {
    super(equalFn);
    this.head === null;
  }

  insert(element, index) {
    if (index == 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null || this.head === undefined) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
      } else {
        node.next = current;
        current = this.getElementAt(this.size() - 1);
        this.head = node;
        current.next = this.head;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size());
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.key;
    }
    return undefined;
  }
}

const list = new CircleLinkedList();
list.insert(1, 0);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
