export class Set {
  constructor() {
    this.items = {}
  }
  
  has(element) {
    return Object.prototype.hasOwnProperty(this.items, element)
  }
} 