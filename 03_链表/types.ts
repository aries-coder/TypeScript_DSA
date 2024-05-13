import {LinkedNode } from "./node"



export interface ILinkedListType<T, LinkedNodeType = LinkedNode<T>> {
  push(element: T): void
  insert(element: T, position: number): boolean
  removeAt(position: number): T | undefined
  indexOf(element: T): number
  remove(element: T): void
  getHead(): LinkedNodeType | null
  isEmpty(): boolean
  size(): number
  toString(): string
  getElementAt(index: number): LinkedNodeType | undefined
  clear(): void
}