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

