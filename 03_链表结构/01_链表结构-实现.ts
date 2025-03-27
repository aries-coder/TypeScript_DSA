import { ILinkedList } from './ILinkedList'

class Node<T = any> {
  value: T
  next: Node | null = null

  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T = any>
  implements ILinkedList<T>
{
  private head: Node<T> | null = null
  private length: number = 0

  get size() {
    return this.length
  }

  peek() {
    return this.head?.value
  }

  private getNode(position: number) {
    let index = 0
    let current = this.head

    while (index++ < position && current) {
      current = current.next
    }

    return current
  }

  append(value: T) {
    const newNode = new Node<T>(value)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.length++
  }

  removeAt(position: number) {
    if (position < 0 || position >= this.size)
      return null

    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      const prev = this.getNode(position - 1)!
      current = this.getNode(position)!

      prev.next = current.next
    }

    this.length--

    return current?.value ?? null
  }

  insert(value: T, position: number) {
    if (position < 0 || position > this.size)
      return false

    const newNode = new Node<T>(value)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const prev = this.getNode(position - 1)!
      newNode.next = prev.next
      prev.next = newNode
    }

    this.length++

    return true
  }

  getElement(position: number) {
    if (position < 0 || position >= this.size)
      return null

    return this.getNode(position)?.value ?? null
  }

  indexOf(value: T) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) return index

      index++
      current = current.next
    }

    return -1
  }

  remove(value: T) {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  update(value: T, position: number) {
    if (position < 0 || position >= this.size)
      return false

    const current = this.getNode(position)!
    current.value = value

    return true
  }

  isEmpty() {
    return this.size === 0
  }

  traverse() {
    let current = this.head
    const values: T[] = []
    while (current) {
      values.push(current.value)
      current = current.next
    }

    return values.join(' -> ')
  }
}

export { LinkedList }
