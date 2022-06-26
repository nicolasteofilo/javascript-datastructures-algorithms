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
    const tableKey = this.toStrFn(key)
    let hash = 0
    for(let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }
}

const hashTable = new HashTable()
const hashNicolas = hashTable.hashCode('nicolas')
console.log(hashNicolas);
