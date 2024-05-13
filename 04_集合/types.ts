export interface ISetType<T = any> {
  add(element: T): boolean
  delete(element: T): boolean
  has(element: T): boolean
  size(): number
  values(): Array<T>
  clear(): void
  union(otherSet: ISetType<T>): ISetType<T>
  intersection(otherSet: ISetType<T>): ISetType<T>
  difference(otherSet: ISetType<T>): ISetType<T>
  isSubsetOf(otherSet: ISetType<T>): boolean
}