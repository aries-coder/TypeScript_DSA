import { ObjectQueue } from "./02_对象实现";

function hotPotato<T>(elementsList: T[], num: number) {
  const queue = new ObjectQueue<T>()

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue() as T)
    }
    const outEl = queue.dequeue()
    console.log(outEl + '淘汰了');
    
  }

  console.log(queue.dequeue() + '取得了胜利');
  
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']

hotPotato(names, 7)