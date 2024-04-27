import { IStackType } from "./types"

class ObjectStack<T> implements IStackType<T> {

  private items: Record<number, T>
  private count: number

  constructor() {
    this.items = []
    this.count = 0
  }

  // 添加一个（或几个）新元素到栈顶
  push(...args: T[]): void {
    for (let i = 0; i < args.length; i++) {
      this.items[this.count] = args[i]
      this.count++
    }

  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    this.count--
    const res = this.items[this.count]
    delete this.items[this.count]

    return res
  }

  // 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
  peek(): T | undefined {

    return this.items[this.count - 1]

  }

  // 如果栈里没有任何元素就返回 true，否则返回 false。
  isEmpty(): boolean {
    return this.count === 0
  }

  // 移除栈里的所有元素。
  clear(): void {
    this.count = 0
    this.items = {}
  }

  // 返回栈里的元素个数。
  size(): number {
    return this.count
  }

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }
    let objString = this.items[0] + ''
    for (let i = 1; i < this.count; i++) { 
      objString += `,${this.items[i]}` 
    }
    return objString;
  }


}

const stack = new ObjectStack<number>()


stack.push(4, 2, 6)
stack.push(8, 1)
console.log(stack.toString());  // 4,2,6,8,1
console.log(stack.pop());  // 1
console.log(stack.peek());  // 8
console.log(stack.isEmpty());  // false
console.log(stack.size());  // 4

stack.clear()

console.log(stack.pop());  // undefined
console.log(stack.peek());  // undefined
console.log(stack.isEmpty());  // true
console.log(stack.size());  // 0
console.log(stack.toString());


export {}

