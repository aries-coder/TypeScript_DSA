import { ISetType } from "./types";


class Set<T extends string | number | symbol = string | number | symbol> implements ISetType<T> {

  private items: Record<T, T>

  constructor() {
    this.items = {} as Record<T, T>
  }

  add(element: T): boolean {
    if (this.has(element)) return false

    this.items[element] = element

    return true
  }

  delete(element: T): boolean {
    if (!this.has(element)) return false

    delete this.items[element]

    return true
  }

  has(element: T): boolean {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  size(): number {
    return Object.keys(this.items).length
  }

  values(): T[] {
    return Object.values(this.items)
  }

  clear(): void {
    this.items = {} as Record<T, T>
  }

  // 并集
  union(otherSet: ISetType<T>): ISetType<T> {
    const set = new Set<T>()

    this.values().forEach(value => set.add(value))
    otherSet.values().forEach(value => set.add(value))

    return set
  }

  // 交集
  intersection(otherSet: ISetType<T>): ISetType<T> {
    const set = new Set<T>()

    this.values().forEach(value => otherSet.has(value) && set.add(value))

    return set
  }

  // 差集
  difference(otherSet: ISetType<T>): ISetType<T> {
    const set = new Set<T>()

    this.values().forEach(value => !otherSet.has(value) && set.add(value))

    return set
  }

  // 子集
  isSubsetOf(otherSet: ISetType<T>): boolean {
    if (this.size() > otherSet.size()) return false
    
    for (const value of this.values()) {
      if (!otherSet.has(value)) {
        return false
      }
    }

    return true
  }

}

