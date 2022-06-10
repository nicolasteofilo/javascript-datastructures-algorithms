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
        const previous = this.getElementAt(index - 1);
        node.next = previous;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  print() {
    return this.head;
  }
}

const list = new CircleLinkedList();
list.insert(12, 0);
console.log(list.print());
