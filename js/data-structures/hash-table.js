import { defaultToString } from "../utils.js";

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    /** @type {Object} */
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }

    /** @type {String} */
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuesPair = this.table[hash];
    if (valuesPair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
}

const hash = new HashTable();
hash.put('Ygritte', 'ygritte@email.com')
hash.put('John', 'john@email.com')
hash.put('Amy', 'amy@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Amy', 'amy@email.com')
hash.put('Nathan', 'nathan@email.com')
hash.put('Sargeras', 'sargeras@email.com')

console.log(`${hash.hashCode('Ygritte')} - Ygritte`)
console.log(`${hash.hashCode('John')} - John`)
console.log(`${hash.hashCode('Amy')} - Amy`)
console.log(`${hash.hashCode('Jamie')} - Jamie`)
console.log(`${hash.hashCode('Amy')} - Amy`)
console.log(`${hash.hashCode('Nathan')} - Nathan`)
console.log(`${hash.hashCode('Sargeras')} - Sargeras`)