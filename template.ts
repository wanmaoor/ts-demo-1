function createArray<T>(length: number, value:T) :Array<T> {
  let arr: Array<T> = []
  for (let i = 0; i < length; i++) {
    arr.push(value)
  }
  return arr
}

const arr1 = createArray(3, 'x')
const arr2 = createArray(5, 1)
console.log(arr1)
console.log(arr2)
