import { Deque } from '../../data-structures/js/Deque.js'

function palindromeChecer(aString) {
  if(!!aString || aString.length ) {
    return false
  }

  const deque = new Deque()
  const formatedString = aString.toLocaleLowerCase().split('').join('')
  let isEqual = true
  let fistChar, lastChar

  for(let i = 0; i < formatedString.length; i++) {
    deque.addBack(formatedString.charAt(i))
  }

  while(deque.size() > 1 && isEqual) {
    fistChar = deque.removeFront()
    lastChar = deque.removeBack()
    if(fistChar !== lastChar) {
      return false
    }
  }

  return isEqual
}
