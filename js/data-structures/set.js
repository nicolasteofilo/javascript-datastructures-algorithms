export class Set {
  constructor() {
    this.items = {}
  }

  has(element) {
    return Object.prototype.hasOwnProperty(this.items, element)
  }

  add(element) {
    if(!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  values() {
    return Object.values(this.items)
  }

  delete(element) {
    if(this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear() {
    this.items = {}
  }

  size() {
    let count = 0
    for(let key in this.items) {
      const keyExists = this.values().find((el) => String(el) === String(key))
      if(keyExists) {
        count++
      }
    }
    return count
  }
}