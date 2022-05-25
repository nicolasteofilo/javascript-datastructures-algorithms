import { Queue } from '../../data-structures/js/Queue.js'

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString())

queue.enqueue('Camila')

console.log(queue.toString())
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue() // remove John
console.log(queue.toString())
queue.dequeue() // remove Jack
console.log(queue.toString())
console.log(queue.toString())

