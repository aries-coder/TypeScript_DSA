import { ArrayQueue } from './01_队列结构-数组实现'

function hotptato(names: string[], num: number) {
  const queue = new ArrayQueue<string>()

  for (const name of names) {
    queue.enqueue(name)
  }

  while (queue.size > 1) {
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()

      if (name) queue.enqueue(name)
    }
    queue.dequeue()
  }

  const leftName = queue.dequeue()!

  return names.indexOf(leftName)
}

console.log(
  hotptato(
    ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'],
    7
  )
)
