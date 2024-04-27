import { LinkedNode } from "./node"

export interface ILinkedListType<T> {
  push(element: T): void
  insert(element: T, position: number): boolean
  removeAt(position: number): T | undefined
  indexOf(element: T): number
  remove(element: T): void
  getHead(): LinkedNode<T> | null
  isEmpty(): boolean
  size(): number
  toString(): string
  getElementAt(index: number): LinkedNode<T> | undefined
  
}