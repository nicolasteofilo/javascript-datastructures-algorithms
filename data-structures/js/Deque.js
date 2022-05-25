export class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
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
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if(!this.isEmpty()) {
      const result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.lowestCount++
      return result
    }}

  removeBack() {
    if(!this.isEmpty()) {
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
      }
    }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if(!this.isEmpty()) {
      return this.items[this.count - 1]
    }
  }  
}
