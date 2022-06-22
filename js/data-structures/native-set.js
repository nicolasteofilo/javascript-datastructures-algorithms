const set = new Set()
set.add(1)
console.log(set.values())
console.log(set.has(1))

const setA = new Set()
const setB = new Set()

setA.add(1)
setA.add(2)
setA.add(3)

setB.add(2)
setB.add(3)
setB.add(4)

const union = (set1, set2) => {
  const unionSet = new Set()
  set1.forEach(value => unionSet.add(value))
  set2.forEach(value => unionSet.add(value))
  return unionSet
}

const intersection = (set1, set2) => {
  const intersectionSet = new Set()
  set1.forEach(value => {
    if(set2.has(value)) {
      intersectionSet.add(value)
    }
    return false
  })
  return intersectionSet
}

console.log(union(setA, setB))
console.log(intersection(setA, setB))