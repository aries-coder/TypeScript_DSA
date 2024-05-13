import { DoublyLinkedNode } from "./node";
import { ILinkedListType } from "./types";

class CircularDoublyLinkedList<T> implements ILinkedListType<T, DoublyLinkedNode<T>> {

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

      this.tail!.next = node
      node.pre = this.tail
      this.tail = node


    }
    this.tail.next = this.head
    this.head.pre = this.tail


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

    this.tail!.next = this.head
    this.head!.pre = this.tail

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

        this.tail!.next = this.head
        this.head!.pre = this.tail
      }
    } else if (position === this.count - 1) {
      current = this.tail!
      const pre = current.pre!

      pre.next = null
      this.tail = pre

      this.tail!.next = this.head
      this.head!.pre = this.tail

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

    for (let i = 1; i < this.count && current !== null && current !== this.head; i++) {
      str += `, ${current.element}`;
      current = current.next;
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

  clear() {
    this.count = 0
    this.head = null
    this.tail = null
  }

}

// 创建一个循环双向链表实例
const list = new CircularDoublyLinkedList<number>();

// 测试 push 方法
console.log("Push elements to the list:");
list.push(1);
list.push(2);
list.push(3);
console.log("List after push:", list.toString()); // 预期结果: "1,2,3"

// 测试 insert 方法
console.log("\nInsert element 0 at position 0:");
list.insert(0, 0);
console.log("List after insert:", list.toString()); // 预期结果: "0,1,2,3"

// 测试 removeAt 方法
console.log("\nRemove element at position 1:");
const removedElement = list.removeAt(1);
console.log("Removed element:", removedElement); // 预期结果: 1
console.log("List after removeAt:", list.toString()); // 预期结果: "0,2,3"

// 测试 size 和 isEmpty 方法
console.log("\nList size:", list.size()); // 预期结果: 3
console.log("Is list empty:", list.isEmpty()); // 预期结果: false

// 测试 getHead 方法
console.log("\nHead element:", list.getHead()?.element ?? "List is empty"); // 预期结果: 0

// 测试 indexOf 方法
console.log("\nIndex of element 2:", list.indexOf(2)); // 预期结果: 1

// 测试 remove 方法
console.log("\nRemove element 3:");
list.remove(3);
console.log("List after remove:", list.toString()); // 预期结果: "0,2"

// 测试 toString 方法的循环性
console.log("\nList as string:", list.toString()); // 预期结果: "0,2"（注意，由于之前删除了元素，链表不再循环回到0）