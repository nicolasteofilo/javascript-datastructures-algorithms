export class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = []
  }

  size() {
    return this.count - this.lowestCount
  }

  isEmpty() {
    return this.size() === 0
  }

  addFront(element) {
    if(this.isEmpty()) {
      this.addBack(element)
    } else if(this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for(let i; this.count > 0; i--) {
        this.items[i] = this.items[i - 1]
      }

      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  addBack(element) {
    this.items.push(element)
    this.count++
  }
}
