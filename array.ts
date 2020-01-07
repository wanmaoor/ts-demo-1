interface IStudents {
  name: string;
  gender: boolean
}

let people: Array<IStudents> = [{name: "alice", gender: false}, {name: "Bob", gender: true}]

console.log(people)

// 类数组

function sum(a, b, c) {
  let sum: number = 0
  let args: IArguments = arguments
  for (let i: number = 0; i < args.length; i++) {
    sum += args[i]
  }
  return sum
}

const res: number = sum(1, 2, 3)
console.log(res)