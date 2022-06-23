import { defaultToString } from "../utils.js";

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

export class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(key) {
    return this.table[key] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  delete(key) {
    if(this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }
}

const dictionary = new Dictionary()
dictionary.set('instagram', '@nicolasteofilo')
dictionary.set('youtube', 'Nicolas Teófilo')
dictionary.delete('instagram')
console.log(dictionary.table)
