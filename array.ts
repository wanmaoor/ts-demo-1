interface IStudents {
  name: string;
  gender: boolean
}

let people: Array<IStudents> = [{name: 'alice', gender: false}, {name: 'Bob', gender: true}]

console.log(people)