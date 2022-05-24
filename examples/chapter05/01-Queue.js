class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++; // ==> this.count = this.count + 1
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  clear() {
    this.count = 0;
    this.items = 0;
    this.lowestCount = 0;
  }

  isEmpty() {
    if (this.items === 0) {
      return true;
    }
    return false;
  }
}
