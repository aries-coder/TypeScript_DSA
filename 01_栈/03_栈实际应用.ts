import { ArrayStack } from './01_数组实现'

// 十进制到二进制
function decimalToBinary(decNumber: number) {
  const stack = new ArrayStack<number>()
  let number = decNumber
  let binaryString = ''

  while (number > 0) {
    stack.push(number % 2)
    number = Math.floor(number / 2)
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }

  return binaryString
}

console.log(decimalToBinary(6));



// 十进制转任意进制
function baseConverter(decNumber: number, base: number) {
  const stack = new ArrayStack<number>()
  const digits= '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let targetString = ''

  while (number > 0) {
    stack.push(number % base)
    number = Math.floor(number / base)
  }

  while (!stack.isEmpty()) {
    targetString +=  digits[stack.pop() as number] + ''
  }
 
  return targetString
}

console.log(baseConverter(10, 16));
