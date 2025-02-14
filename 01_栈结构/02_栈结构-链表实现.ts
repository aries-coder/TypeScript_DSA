import { Istack } from './IStack'

class LinkedStack<T = any> implements Istack<T> {
  push(item: T): void {
    throw new Error('Method not implemented.')
    console.log(item)
  }
  pop(): T | undefined {
    throw new Error('Method not implemented.')
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.')
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.')
  }
  size(): number {
    throw new Error('Method not implemented.')
  }
}

export { LinkedStack }
