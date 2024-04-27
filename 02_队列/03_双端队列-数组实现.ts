import { IDequeType } from "./types"


class ArrayDeque<T> implements IDequeType<T> {

  private items: T[]

  constructor() {
    this.items = []
  }

  addFront(...args: T[]): void {
    this.items.unshift(...args)
  }

  addBack(...args: T[]): void {
    this.items.push(...args)
  }

  removeFront(): T | undefined {
    return this.items.shift()
  }

  removeBack(): T | undefined {
    return this.items.pop()
  }

  peekFront(): T | undefined {
    return this.items[0]
  }

  peekBack(): T | undefined {
    return this.items[this.size() - 1]
  }

  isEmpty(): boolean {
    return this.items.length === 0
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

const deque = new ArrayDeque<string>(); 

console.log(deque.isEmpty()); // 输出true 
deque.addBack('John'); 
deque.addBack('Jack'); 
console.log(deque.toString()); // John, Jack 
deque.addBack('Camila'); 
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.isEmpty()); // 输出false 
deque.removeFront(); // 移除John 
console.log(deque.toString()); // Jack, Camila 
deque.removeBack(); // Camila决定离开
console.log(deque.toString()); // Jack 
deque.addFront('John'); // John回来询问一些信息
console.log(deque.toString()); // John, Jack 