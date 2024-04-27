import { IDequeType } from "./types";

class ObjectDeque<T> implements IDequeType<T> {

  private items: Record<number, T>
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }


  addFront(...args: T[]): void {
    if (this.isEmpty()) {
      this.addBack(...args)
    }

    for (let i = args.length - 1; i >= 0; i--) {
      
      if (this.lowestCount > 0) {
        this.lowestCount--
      } else {
        for (let j = this.count; j > 0; j--) {
          this.items[j] = this.items[j - 1]
        }
        this.count++

      }

      this.items[this.lowestCount] = args[i]

      console.log("count------------------" + this.count);
      console.log("lowestCount------------------" + this.lowestCount);
      console.log(this.items);
    }
  }

  addBack(...args: T[]): void {
    for (let i = 0; i < args.length; i++) {
      this.items[this.count] = args[i]
      this.count++
    }
  }

  removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    const res = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++

    return res
  }

  removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    this.count--
    const res = this.items[this.count]
    delete this.items[this.count]


    return res
  }

  peekFront(): T | undefined {

    return this.items[this.lowestCount]
  }

  peekBack(): T | undefined {
    return this.items[this.count]
  }

  isEmpty(): boolean {
    return this.count - this.lowestCount === 0
  }

  size(): number {
    return this.count - this.lowestCount
  }

  clear(): void {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }

    let str = this.items[this.lowestCount] + ''
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str += `,${this.items[i]}`
    }

    return str
  }

}

// const deque = new ObjectDeque<string>();

// console.log(deque.isEmpty()); // 输出true 
// deque.addBack('John');
// deque.addBack('Jack');
// console.log(deque.toString()); // John, Jack 
// deque.addBack('Camila');
// console.log(deque.toString()); // John, Jack, Camila
// console.log(deque.isEmpty()); // 输出false 
// deque.removeFront(); // 移除John 
// console.log(deque.toString()); // Jack, Camila 
// deque.removeBack(); // Camila决定离开
// console.log(deque.toString()); // Jack 

// deque.addFront('John'); // John回来询问一些信息
// console.log(deque.toString()); // John, Jack 

// deque.addFront('周杰伦', '王力宏', '刘将军'); 
// console.log(deque.toString()); // 周杰伦,王力宏,刘将军,John,Jack



export {
  ObjectDeque
}