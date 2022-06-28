const map = new Map();
map.set('Nicolas', 'nicolas@email.com')
map.set('John', 'john@email.com')
map.set('Tyrion', 'tyrion@email.com')
console.log(map.has('Nicolas')) // true
console.log(map.size) // 3
console.log(map.keys()) // MapIterator {"Nicolas", "John", "Tyrion"}
console.log(map.values()) // MapIterator {"nicolas@email.com", "john@email.com", "tyrion@email.com"}
console.log(map.get('Nicolas'))