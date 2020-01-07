function getLength(somethingToRead: string | number): number {
  if ((somethingToRead as string).length){
    return (somethingToRead as string).length
  } else {
    return somethingToRead.toString().length
  }
}

console.log(getLength('wanmao'))