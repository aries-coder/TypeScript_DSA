import { ArrayStack } from './01_栈结构-数组实现'

function isPalindrome(str: string) {
  let s = ''
  const stack = new ArrayStack<string>()

  for (let i = 0; i < str.length; i++) {
    s = str[i]

    switch (s) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (stack.pop() !== s) return false
        break
    }
  }

  return stack.isEmpty()
}

console.log(isPalindrome('()[]'))
console.log(isPalindrome('()[]{}'))
console.log(isPalindrome('()[]{)'))
console.log(isPalindrome(')'))
