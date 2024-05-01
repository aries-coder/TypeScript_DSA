export class LinkedNode<T> {
  element: T
  next: LinkedNode<T> | null

  constructor(element: T, next = null) {
    this.element = element
    this.next = next
  }
}

export class DoublyLinkedNode<T> {

  element: T
  next: DoublyLinkedNode<T> | null
  pre: DoublyLinkedNode<T> | null
  
  constructor(element: T, next = null, pre = null) {
    this.element = element
    this.next = next
    this.pre = pre
  }
}

