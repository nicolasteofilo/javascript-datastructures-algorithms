const { DoublyLinkedList } = require('./doubly-linked-list.js')

export class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList()
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if(this.items.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.items.size() - 1)
  }

  clear() {
    return this.items.clear()
  }

  toString() {
    return this.items.toString()
  }

  size() {
    return this.items.size()
  }
}