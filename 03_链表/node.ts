export class LinkedNode<T> {
  element: T
  next: LinkedNode<T> | null

  constructor(element: T, next = null) {
    this.element = element
    this.next = next
  }
}