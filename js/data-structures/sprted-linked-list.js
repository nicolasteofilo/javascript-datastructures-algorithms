const { LinkedList } = require('./linked-list')
const { defaultEquals } = require('../utils')

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

function defaultCompare(a, b) {
  if(a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN 
}

class SortedLinkedList extends LinkedList {
  constructor(equalFn = defaultEquals, compareFn = defaultCompare) {
    super(equalFn)
    this.compareFn = compareFn
  }
}