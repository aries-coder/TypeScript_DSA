import { ObjectDeque } from "./04_双端队列-对象实现"

function palindromeChecker(str: string) {

  const lowerStr = str.toLowerCase().split(" ").join("")
  const deque = new ObjectDeque<string>()
  let key = true
  let firstStr, lastStr

  for (let i = 0; i < lowerStr.length; i++) {
    deque.addBack(lowerStr[i])
  }

  while (deque.size() > 1 && key) {
    firstStr = deque.removeFront()
    lastStr = deque.removeBack()
    
    if (firstStr !== lastStr) {
      key = false
    }
  }

  return key
}

console.log(palindromeChecker("zjlQljz"));  // true
console.log(palindromeChecker("wlhQqlw"));  // false

