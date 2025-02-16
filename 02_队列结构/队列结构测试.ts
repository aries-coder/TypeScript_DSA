import { ArrayQueue } from './01_队列结构-数组实现'

const queue = new ArrayQueue<number>()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.size)
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.isEmpty())
