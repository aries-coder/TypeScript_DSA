import { IList } from '../types/IList'

export interface IQueue<T> extends IList<T> {
  enqueue(item: T): void
  dequeue(): T | undefined
}
