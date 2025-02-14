import { IList } from '../types/IList'

export interface Istack<T> extends IList<T> {
  push(item: T): void
  pop(): T | undefined
}
