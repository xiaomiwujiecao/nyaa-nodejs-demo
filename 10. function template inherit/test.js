const _ = require('./build/Release/inherit')

const pet = new _.Pet()
const dog = new _.Dog()

console.log(pet)
console.log(pet.summary())

console.log(dog)
dog.setName('xiaohai')
console.log(dog.summary())