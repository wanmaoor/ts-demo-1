// declaration

function sum(x: number, y: number): number {
  return x + y
}

console.log(sum(1, 23))

// function expression

const mySum: (x: number, y: number) => number = (a, b) => a + b

console.log(mySum(2, 2))