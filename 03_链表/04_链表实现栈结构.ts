import { IStackType } from "../01_栈/types";
import { LinkedList } from "./01_创建链表";


class LinkedListStack<T> implements IStackType<T> {

  private items: LinkedList<T>

  constructor() {
    this.items = new LinkedList<T>()
  }

  push(...args: T[]): void {
    for (let i = 0; i < args.length; i++) {
      this.items.push(args[i])
    }
  }

  pop(): T | undefined {
    if (this.items.isEmpty()) return undefined

    const index = this.items.size() - 1
    return this.items.removeAt(index)
  }

  peek(): T | undefined {
    if (this.items.isEmpty()) return undefined

    const index = this.items.size() - 1
    return this.items.getElementAt(index)?.element
  }

  isEmpty(): boolean {
    return this.items.isEmpty()
  }

  clear(): void {
    this.items.clear()
  }

  size(): number {
    return this.items.size()
  }

  toString(): string {
    return this.items.toString()
  }

}

// 创建一个栈实例用于测试
const stack = new LinkedListStack<number>();

console.log("Stack is initially empty:", stack.isEmpty()); // 预期结果: true

// 测试 push 方法
console.log("\nPush elements to the stack:");
stack.push(1, 2, 3);
console.log("Stack size after push:", stack.size()); // 预期结果: 3
console.log("Top element after push:", stack.peek()); // 预期结果: 3

// 测试 pop 方法
console.log("\nPop elements from the stack:");
console.log("Popped element:", stack.pop()); // 预期结果: 3
console.log("Stack size after pop:", stack.size()); // 预期结果: 2
console.log("Top element after pop:", stack.peek()); // 预期结果: 2

// 测试 clear 方法
console.log("\nClear the stack:");
stack.clear();
console.log("Stack size after clear:", stack.size()); // 预期结果: 0
console.log("Stack is empty after clear:", stack.isEmpty()); // 预期结果: true

// 测试栈在空状态时的行为
console.log("\nAttempt to pop from an empty stack:");
console.log("Popped element:", stack.pop()); // 预期结果: undefined
console.log("Top element when empty:", stack.peek()); // 预期结果: undefined

// 测试多次 pop 操作
stack.push(4, 5);
console.log("\nPop all elements from the stack:");
while (!stack.isEmpty()) {
  console.log("Popped element:", stack.pop()); // 预期结果: 5, 然后是 4
}

console.log("\nFinal stack state:");
console.log("Stack size:", stack.size()); // 预期结果: 0
console.log("Is stack empty:", stack.isEmpty()); // 预期结果: true