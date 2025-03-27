import { IList } from '../types/IList'

export interface ILinkedList<T> extends IList<T> {
  append(value: T): void
  removeAt(position: number): T | null
  insert(value: T, position: number): boolean
  getElement(position: number): T | null
  indexOf(value: T): number
  remove(value: T): T | null
  update(value: T, position: number): boolean
  traverse(): void
}
