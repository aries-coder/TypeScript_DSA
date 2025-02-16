import { ArrayStack } from './01_栈结构-数组实现'

function dexToBin(num: number) {
  const stack = new ArrayStack<number>()

  while (num) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }

  while (stack.size) {
    console.log(stack.pop())
  }
}

dexToBin(10) // 1010
