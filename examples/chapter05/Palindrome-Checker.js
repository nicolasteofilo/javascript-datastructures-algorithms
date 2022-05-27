import { Deque } from '../../data-structures/js/Deque.js'

function palindromeChecer(aString) {
  if(aString === undefined || (aString !== null && aString.length === 0) || aString === null) {
    return false
  }

  const deque = new Deque()
  const formatedString = aString.toLocaleLowerCase().split('').join('')
  let isEqual = true
  let fistChar
  let lastChar

  for(let i = 0; i < formatedString.length; i++) {
    deque.addBack(formatedString.charAt(i))
  }

  while(deque.size() > 1 && isEqual) {
    fistChar = deque.removeFront()
    lastChar = deque.removeBack()
    if(fistChar !== lastChar) {
      isEqual = false
    }
  }

  return isEqual
}

console.log("'a' is palindrome?", palindromeChecer('a'))
console.log("'nicolas' is palindrome?", palindromeChecer('nicolas'))
console.log("'level' is palindrome?", palindromeChecer('level'))
console.log("'kayak' is palindrome?", palindromeChecer('kayak'))
