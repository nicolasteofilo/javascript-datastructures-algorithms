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

  unior(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let samllerSet = otherValues
    
    if(otherValues.length - values.length > 0) {
      biggerSet = otherValues
      samllerSet = values
    }

    samllerSet.forEach(value => {
      if(biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })

    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if(!otherSet.values().includes(value)) {
        console.log(value)
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  isSubsetOf(otherSet) {
    if(this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true
    this.values().every(value => {
      const find = otherSet.values().find(el => el == value)
      if(!find) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}

const setA = new Set()
const setB = new Set()

setA.add(1)
setA.add(2)
setA.add(3)

setB.add(2)
setB.add(3)

const unionAB = setA.unior(setB)
const intersectionAB = setA.intersection(setB)
const differenceAB = setA.difference(setB)

console.log('unionAB: ', unionAB.values())
console.log('intersectionAB: ', intersectionAB.values())
console.log('differenceAB: ', differenceAB.values())

const BIsSubsetInA = setB.isSubsetOf(setA)
console.log({ BIsSubsetInA })
