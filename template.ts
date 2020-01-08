function createArray<T>(length: number, value: T): Array<T> {
  let arr: Array<T> = []
  for (let i = 0; i < length; i++) {
    arr.push(value)
  }
  return arr
}

const arr1 = createArray(3, "x")
const arr2 = createArray(5, 1)
console.log(arr1)
console.log(arr2)

// 多个类型参数
function swap<T, U>(tuples: [T, U]): [U, T] {
  return [tuples[1], tuples[0]]
}

const tuple1 = swap([1, 2])
console.log(tuple1)

const tuple2 = swap(["wanmao", 100])
console.log(tuple2)

// 泛型约束

interface Length {
  length: number
}

function loggingIdentity<T extends Length>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity('wanmao')
loggingIdentity([1,2,3])