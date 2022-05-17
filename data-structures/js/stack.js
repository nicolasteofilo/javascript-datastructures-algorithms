export class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count = this.count + 1;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.items === 0;
  }

  pop() {
    if (!this.isEmpty()) {
      this.count = this.count - 1;
      const result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
    return undefined;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.count - 1];
    }
    return undefined;
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop;
    }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
