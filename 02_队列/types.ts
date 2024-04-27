export interface IQueueType<T> {
  enqueue(...args: T[]): void
  dequeue(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  size(): number
  clear(): void
  toString(): string
}

export interface IDequeType<T> {
  addFront(...args: T[]): void
  addBack(...args: T[]): void
  removeFront(): T | undefined
  removeBack(): T | undefined
  peekFront(): T | undefined
  peekBack(): T | undefined
  isEmpty(): boolean
  size(): number
  clear(): void
  toString(): string
}