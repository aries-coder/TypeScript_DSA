import { LinkedNode } from "./node";
import { ILinkedListType } from "./types";

class LinkedList<T> implements ILinkedListType<T> {

  private head: LinkedNode<T> | null
  private count: number

  constructor() {
    this.head = null
    this.count = 0
  }

  push(element: T): void {
    const node = new LinkedNode<T>(element)

    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }

    this.count++

  }

  insert(element: T, position: number): boolean {
    if (position < 0 || position > this.count) return false

    const node = new LinkedNode<T>(element)
    if (position === 0) {
      const current = this.head
      node.next = current
      this.head = node
    } else {
      const pre = this.getElementAt(position - 1)!
      const current = pre.next
      pre.next = node
      node.next = current
    }

    this.count++
    return true
  }

  removeAt(position: number): T | undefined {
    if (position < 0 || position >= this.count) return undefined

    let current = this.head!

    if (position === 0) {
      this.head = current.next

    } else {
      const pre = this.getElementAt(position - 1)!
      current = pre.next!
      pre.next = current.next
    }

    this.count--
    return current.element
  }

  indexOf(element: T): number {
    let current = this.head
    let index = 0

    while (current !== null) {
      if (current.element === element) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  remove(element: T) {
    const index = this.indexOf(element)
    this.removeAt(index)

  }

  isEmpty(): boolean {
    return this.count === 0
  }

  size(): number {
    return this.count
  }

  getHead(): LinkedNode<T> | null {
    return this.head
  }

  toString(): string {
    if (this.head === null) return ''

    let str = `${this.head.element}`
    let current = this.head.next

    while (current !== null) {
      str += `,${current.element}`
      current = current.next
    }

    return str
  }

  getElementAt(index: number): LinkedNode<T> | undefined {
    if (index < 0 || index >= this.count) return undefined

    let current = this.head!
    for (let i = 0; i < index; i++) {
      current = current.next!
    }

    return current

  }

  clear(): void {
    this.count = 0
    this.head = null
  }



}

// 创建一个链表实例
// const linkedList = new LinkedList<number>();

// // 向链表中添加元素
// linkedList.push(10);
// linkedList.push(20);
// linkedList.push(30);

// // 在指定位置插入元素
// linkedList.insert(15, 1); // 在索引1的位置插入15

// // 打印链表
// console.log(linkedList.toString()); // 应该输出 "10,15,20,30"

// // 移除指定位置的元素
// const removedElement = linkedList.removeAt(1); // 移除索引1的元素
// console.log(`Removed element: ${removedElement}`); // 应该输出 "Removed element: 15"

// // 打印更新后的链表
// console.log(linkedList.toString()); // 应该输出 "10,20,30"

// // 查找元素的索引
// const index = linkedList.indexOf(20);
// console.log(`Index of 20: ${index}`); // 应该输出 "Index of 20: 1"

// // 移除特定值的元素
// linkedList.remove(30);
// console.log(linkedList.toString()); // 应该输出 "10,20"

// // 检查链表是否为空
// console.log(`Is the list empty? ${linkedList.isEmpty()}`); // 应该输出 "Is the list empty? false"

// // 获取链表的大小
// console.log(`List size: ${linkedList.size()}`); // 应该输出 "List size: 2"

// // 获取链表的头节点
// const headNode = linkedList.getHead();
// console.log(`Head node element: ${headNode?.element}`); // 应该输出 "Head node element: 10"

// // 获取特定索引的元素
// const elementAtIndex = linkedList.getElementAt(1);
// console.log(`Element at index 1: ${elementAtIndex?.element}`); // 应该输出 "Element at index 1: 20"

export {
  LinkedList
}