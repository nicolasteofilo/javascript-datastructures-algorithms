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
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  keyValues() {
    const valuesPairs = [];
    for (const k in this.table) {
      if (this.hasKey(k)) {
        valuesPairs.push(this.table[k]);
      }
    }
    return valuesPairs;
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    const values = [];
    const valuesPair = this.keyValues();
    for (let i = 0; i < valuesPair.length; i++) {
      values.push(valuesPair[i].value);
    }
    return values;
  }

  forEach(callbackFn) {
    const valuesPairs = this.keyValues();
    for (let i = 0; i < valuesPairs.length; i++) {
      const result = callbackFn(valuesPairs[i].key, valuesPairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
}
