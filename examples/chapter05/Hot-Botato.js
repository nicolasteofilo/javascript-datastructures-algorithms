import { Queue } from '../../data-structures/js/Queue.js'

function hotBotato (elementsList, num) {
  const queue = new Queue()
  const elelimitatedList = []
  
  for(let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while(queue.size() > 1) {
    console.log(queue.toString())
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }

    elelimitatedList.push(queue.dequeue())
  }

  return {
    elimineted: elelimitatedList,
    winner: queue.dequeue()
  }
}

const names = ['Jack', 'Eliza', 'John', 'Maria']
const result = hotBotato(names, 9)
console.log(result)
result.elimineted.forEach(name => {console.log(`${name} was elimineted from the Hot Botato game :(`)})
console.log(`The winner is: ${result.winner}`)
