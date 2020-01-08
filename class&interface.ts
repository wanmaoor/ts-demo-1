interface Action {
  eat()
  
  sleep()
}

class Animal {}

class Human extends Animal implements Action {
  eat() {
    console.log("用筷子吃饭")
  }
  
  sleep() {
    console.log("在床上睡觉")
  }
}

class Pig extends Animal implements Action {
  eat() {
    console.log("等别人喂")
  }
  
  sleep() {
    console.log("在猪圈睡觉")
  }
}

const person = new Human()
person.eat()
person.sleep()

const pigOne = new Pig()
pigOne.eat()
pigOne.sleep()