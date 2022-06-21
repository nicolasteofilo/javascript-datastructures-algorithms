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

  valuesLegacy() {
    let values = []
    for(let key in this.items) {
      const keyExists = this.values().find((el) => String(el) === String(key))
      if(keyExists) {
        values.push(keyExists)
      }
    }
    return values
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


const set = new Set
set.add(1)
set.add(2)
const size = set.valuesLegacy()
console.log(size);