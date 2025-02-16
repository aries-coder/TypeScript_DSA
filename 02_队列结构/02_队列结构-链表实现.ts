import { IQueue } from './IQueue'

class LinkedQueue<T = any> implements IQueue<T> {
  enqueue(item: T): void {
    console.log(item)
  }
  dequeue(): T | undefined {
    throw new Error('Method not implemented.')
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.')
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.')
  }
  get size(): number {
    throw new Error('Method not implemented.')
  }
}

export { LinkedQueue }
