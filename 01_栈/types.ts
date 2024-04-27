export interface IStackType<T> {
  push(...args: T[]): void
  pop(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  clear(): void
  size(): number
  toString(): string
}