
import { DoublyLinkedNode } from "./node";
import { ILinkedListType } from "./types";

class DoublyLinkedList<T> implements ILinkedListType<T, DoublyLinkedNode<T>> {

  private head: DoublyLinkedNode<T> | null
  private tail: DoublyLinkedNode<T> | null
  private count: number

  constructor() {
    this.tail = null
    this.head = null
    this.count = 0
  }

  push(element: T): void {
    const node = new DoublyLinkedNode<T>(element)

    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
      this.tail = node
      node.pre = current
    }

    this.count++
  }

  insert(element: T, position: number): boolean {
    if (position < 0 || position > this.count) return false

    const node = new DoublyLinkedNode<T>(element)
    let current = this.head!

    if (position === 0) {
      if (this.head === null) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        current.pre = node
        this.head = node
      }
    } else if (position === this.count) {
      current = this.tail!
      current.next = node
      node.pre = current
      this.tail = node
    } else {
      const pre = this.getElementAt(position - 1)!
      current = pre.next!

      pre.next = node
      node.next = current

      node.pre = pre
      current.pre = node

    }

    this.count++

    return true

  }

  removeAt(position: number): T | undefined {
    if (position < 0 || position >= this.count) return undefined
    
    let current = this.head!

    if (position === 0) {
      this.head = current.next

      if (this.count === 1) {
        this.tail = null
      } else {
        this.head!.pre = null
      }
    } else if (position === this.count - 1) {
      current = this.tail!
      const pre = current.pre!

      pre.next = null
      this.tail = pre
    } else {
      current = this.getElementAt(position)!

      const pre = current.pre!
      const next = current.next!

      pre.next = next
      next.pre = pre
    }

    this.count--

    return current.element
  }

  indexOf(element: T): number {
    let current = this.head
    let count = 0

    while (current !== null) {
      if (current.element === element) {
        return count
      }
      count++
      current = current.next!
    }

    return -1
  }

  remove(element: T): void {
    const index = this.indexOf(element)
    this.removeAt(index)
  }

  getHead(): DoublyLinkedNode<T> | null {
    return this.head
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  size(): number {
    return this.count
  }

  toString(): string {
    if (this.head === null) return ''

    let str = `${this.head.element}`
    let current = this.head.next

    while (current !== null) {
      str += `，${current.element}`
      current = current.next
    }

    return str
  }

  getElementAt(index: number): DoublyLinkedNode<T> | undefined {
    if (index < 0 || index >= this.count) return undefined

    let current = this.head!

    for (let i = 0; i < index; i++) {
      current = current.next!
    }

    return current
  }

}

// 创建一个链表实例
const linkedList = new DoublyLinkedList<number>();

// 向链表中添加元素
linkedList.push(10); // 预期: "10"
linkedList.push(20);
linkedList.push(30); // 预期: "10,20,30"

// 打印链表
console.log(linkedList.toString()); // 预期: "10,20,30"

// 在链表中插入元素
linkedList.insert(5, 1); // 在索引1的位置插入5，预期: "10,5,20,30"
linkedList.insert(25, 4); // 在索引4的位置插入25，预期: "10,5,20,30,25"

// 打印链表
console.log(linkedList.toString()); // 预期: "10,5,20,30,25"

// 从链表中移除元素
console.log(linkedList.removeAt(2)); // 移除索引2的元素，预期返回20
console.log(linkedList.toString()); // 预期: "10,5,30,25"

// 移除特定值的元素
linkedList.remove(30); // 移除值为30的元素
console.log(linkedList.toString()); // 预期: "10,5,25"

// 获取链表头部元素
console.log(linkedList.getHead()?.element ?? "List is empty"); // 预期: 10

// 检查链表是否为空
console.log(linkedList.isEmpty()); // 预期: false

// 获取链表大小
console.log(linkedList.size()); // 预期: 3

// 将链表转换为字符串
console.log(linkedList.toString()); // 预期: "10,5,25"

// 获取链表中特定位置的元素索引
console.log(linkedList.indexOf(25)); // 预期: 2
console.log(linkedList.indexOf(30)); // 预期: -1 （因为30已被移除）

// 获取特定索引位置的元素
console.log(linkedList.getElementAt(1)?.element ?? "Index out of bounds"); // 预期: 5
console.log(linkedList.getElementAt(5) ? "Index out of bounds" : "List is empty or index out of bounds"); // 预期: "Index out of bounds"

export {
  DoublyLinkedList
}