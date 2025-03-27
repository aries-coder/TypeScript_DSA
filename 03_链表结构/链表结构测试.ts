import { LinkedList } from './01_链表结构-实现' // 假设你的代码保存在 LinkedList.ts 文件中

// 测试初始化
const list = new LinkedList<number>()
console.log('初始化链表，当前长度:', list.size) // 应该输出 0
console.log('链表是否为空:', list.isEmpty()) // 应该输出 true

// 测试添加元素
list.append(10)
list.append(20)
list.append(30)
console.log('添加元素后链表:', list.traverse()) // 应该输出 10 -> 20 -> 30
console.log('当前长度:', list.size) // 应该输出 3
console.log('链表是否为空:', list.isEmpty()) // 应该输出 false

// 测试获取元素
console.log(
  '获取索引为 1 的元素:',
  list.getElement(1)
) // 应该输出 20
console.log(
  '获取索引为 -1 的元素:',
  list.getElement(-1)
) // 应该输出 null
console.log(
  '获取索引为 3 的元素:',
  list.getElement(3)
) // 应该输出 null

// 测试插入元素
console.log(
  '在索引 1 插入元素 15:',
  list.insert(15, 1)
) // 应该输出 true
console.log('插入后链表:', list.traverse()) // 应该输出 10 -> 15 -> 20 -> 30
console.log('当前长度:', list.size) // 应该输出 4
console.log(
  '在索引 5 插入元素 40:',
  list.insert(40, 5)
) // 应该输出 false
console.log(
  '在索引 -1 插入元素 5:',
  list.insert(5, -1)
) // 应该输出 false

// 测试删除元素
console.log(
  '删除索引为 2 的元素:',
  list.removeAt(2)
) // 应该输出 20
console.log('删除后链表:', list.traverse()) // 应该输出 10 -> 15 -> 30
console.log('当前长度:', list.size) // 应该输出 3
console.log(
  '删除索引为 -1 的元素:',
  list.removeAt(-1)
) // 应该输出 null
console.log(
  '删除索引为 3 的元素:',
  list.removeAt(3)
) // 应该输出 null

// 测试查找元素
console.log(
  '查找元素 15 的索引:',
  list.indexOf(15)
) // 应该输出 1
console.log(
  '查找元素 40 的索引:',
  list.indexOf(40)
) // 应该输出 -1

// 测试更新元素
console.log(
  '更新索引为 1 的元素为 25:',
  list.update(25, 1)
) // 应该输出 true
console.log('更新后链表:', list.traverse()) // 应该输出 10 -> 25 -> 30
console.log(
  '更新索引为 -1 的元素:',
  list.update(50, -1)
) // 应该输出 false
console.log(
  '更新索引为 3 的元素:',
  list.update(60, 3)
) // 应该输出 false

// 测试清空链表
while (!list.isEmpty()) {
  list.removeAt(0)
}
console.log('清空链表后长度:', list.size) // 应该输出 0
console.log('清空链表后是否为空:', list.isEmpty()) // 应该输出 true
