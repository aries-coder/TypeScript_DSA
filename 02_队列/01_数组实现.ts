import { IQueueType } from "./types"


class ArrayQueue<T> implements IQueueType<T> {

  private items: T[]

  constructor() {
    this.items = []
  }

  enqueue(...args: T[]): void {
    this.items.push(...args)
  }

  dequeue(): T | undefined {
    
    return this.items.shift()
  }

  peek(): T | undefined {
    return this.items[0]
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.items.length
  }

  clear(): void {
    this.items.length = 0
  }

  toString(): string {

    return this.items.join(',')
  }

}

const queue = new ArrayQueue<string>()

// queue.enqueue(3, 5, 2, 6)
// queue.enqueue(10, 8)
// console.log(queue.toString());  // 3,5,2,6,10,8
// console.log(queue.dequeue());  // 3
// console.log(queue.isEmpty());  // false
// console.log(queue.size());  // 5

// queue.clear()

// console.log(queue.toString());  // ''
// console.log(queue.dequeue());  // undefined
// console.log(queue.isEmpty());  // true
// console.log(queue.size());  // 0



queue.enqueue('John'); 
queue.enqueue('Jack'); 
console.log(queue.toString()); // John,Jack 

queue.enqueue('Camila'); 

console.log(queue.toString()); // John, Jack, Camila 
console.log(queue.size()); // 输出 3 
console.log(queue.isEmpty()); // 输出 false 
queue.dequeue(); // 移除 John 
queue.dequeue(); // 移除 Jack 
console.log(queue.toString()); // Camila


export {}