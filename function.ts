// declaration

function sum(x: number, y: number): number {
  return x + y
}

console.log(sum(1, 23))

// function expression

const mySum: (x: number, y: number) => number = (a, b) => a + b

console.log(mySum(2, 2))

// interface

interface ISum {
  (x: number, y: number): number
}

const iSum: ISum = (m, n) => m + n

console.log(iSum(3, 4))

// 可选参数

interface IOptionalSum {
  (x: number, y: number, z?: number): number
}

const iOptionalSum: IOptionalSum = (a, b, c) => {
  if (c) {
    return a + b + c
  } else {
    return a + b
  }
}

console.log(iOptionalSum(1, 2, 3))
console.log(iOptionalSum(11, 22))

// default parameters

function add(m: number, b: number = 999): number {
  return m + b
}

console.log(add(1))
console.log(add(1,1))

// 剩余参数

function push(array: number[], ...items: number[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
console.log(a)