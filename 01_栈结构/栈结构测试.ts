import { ArrayStack } from './01_栈结构-数组实现'

// 测试代码
const stack = new ArrayStack<number>()

console.log('初始栈是否为空:', stack.isEmpty()) // true

stack.push(1)
stack.push(2)
stack.push(3)

console.log('压入三个元素后的大小:', stack.size) // 3
console.log('栈顶元素:', stack.peek()) // 3
console.log('弹出元素:', stack.pop()) // 3
console.log('弹出后的大小:', stack.size) // 2
