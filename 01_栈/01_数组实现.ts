import { IStackType } from "./types"

class ArrayStack<T> implements IStackType<T> {

  private items: T[]

  constructor() {
    this.items = []
  }

  // 添加一个（或几个）新元素到栈顶
  push(...args: T[]): void {
    this.items.push(...args)
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop(): T | undefined {
    return this.items.pop()
  }

  // 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
  peek(): T | undefined {
    
    return this.items[this.items.length-1]
    
  }

  // 如果栈里没有任何元素就返回 true，否则返回 false。
  isEmpty(): boolean {
    return this.items.length === 0
  }

  // 移除栈里的所有元素。
  clear(): void {
    this.items.length = 0
  }

  // 返回栈里的元素个数。
  size(): number {
    return this.items.length
  }
  
  toString(): string {
    return this.items.join(',')
  }
}

const stack = new ArrayStack<number>()


// stack.push(4, 2, 6, 8, 1)
// console.log(stack.toString());  // 4,2,6,8,1
// console.log(stack.pop());  // 1
// console.log(stack.peek());  // 8
// console.log(stack.isEmpty());  // false
// console.log(stack.size());  // 4

// stack.clear()

// console.log(stack.pop());  // undefined
// console.log(stack.peek());  // undefined
// console.log(stack.isEmpty());  // true
// console.log(stack.size());  // 0



export {
  ArrayStack
}