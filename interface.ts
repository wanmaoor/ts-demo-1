interface IPerson {
  name: string;
  age: number;
}

const man: IPerson = {
  name: "wanmao",
  age: 18
}

console.log(man)

// 可选属性

interface IAnimal {
  name: string;
  age?: number;
}

const animal: IAnimal = {
  name: '猪猪'
}

console.log(animal)

// 任意属性

interface IPhones {
  name: string;
  G: number;
  [prop: string]: any;
}

let phone: IPhones ={
  name: 'hua-wei',
  G: 5,
  days: 251
}

console.log(phone)

// 只读属性

interface IFruit {
  readonly color: string;
}

const fruit: IFruit = {
  color: 'red'
}