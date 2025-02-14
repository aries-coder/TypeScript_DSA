import { Istack } from './IStack'

class ArrayStack<T = any> implements Istack<T> {
  private items: T[] = []

  push(item: T) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.size - 1]
  }

  isEmpty() {
    return this.size === 0
  }

  get size() {
    return this.items.length
  }
}

export { ArrayStack }
