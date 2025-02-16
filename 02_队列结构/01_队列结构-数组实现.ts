import { IQueue } from './IQueue'

class ArrayQueue<T = any> implements IQueue<T> {
  private items: T[] = []

  enqueue(item: T): void {
    this.items.push(item)
  }
  dequeue(): T | undefined {
    return this.items.shift()
  }
  peek(): T | undefined {
    return this.items[0]
  }
  isEmpty(): boolean {
    return this.size === 0
  }
  get size(): number {
    return this.items.length
  }
}

export { ArrayQueue }
