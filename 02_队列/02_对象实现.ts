import { IQueueType } from "./types";

class ObjectQueue<T> implements IQueueType<T> {

  private items: Record<number, T>
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.lowestCount = 0
    this.count = 0
  }

  enqueue(...args: T[]): void {
    for (let i = 0; i < args.length; i++) {
      this.items[this.count] = args[i]
      this.count++
    }
  }

  dequeue(): T | undefined {

    if (this.isEmpty()) {
      return undefined
    }

    const res = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++

    return res
  }
  
  peek(): T | undefined {

    return this.items[this.lowestCount]

  }

  isEmpty(): boolean {
    return this.count - this.lowestCount === 0
  }

  size(): number {
    return this.count - this.lowestCount
  }

  clear(): void {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }

    let str = this.items[this.lowestCount] + ''
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str += `,${this.items[i]}`
    }

    return str
  }
  
}

const queue = new ObjectQueue<string>()

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


export {
  ObjectQueue
}