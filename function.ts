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

console.log(iSum(3,4))