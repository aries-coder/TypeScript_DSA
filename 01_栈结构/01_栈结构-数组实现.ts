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
    return this.items[this.size() - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.items.length
  }
}

// 测试代码
const stack = new ArrayStack<number>()

console.log('初始栈是否为空:', stack.isEmpty()) // true

stack.push(1)
stack.push(2)
stack.push(3)

// console.log("压入三个元素后的大小:", stack.size())  // 3
// console.log("栈顶元素:", stack.peek())  // 3
// console.log("弹出元素:", stack.pop())   // 3
// console.log("弹出后的大小:", stack.size())  // 2

export { ArrayStack }
