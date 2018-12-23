var util = require('util')

// console.log(util)
function Pet() {
  this.name = 'unkown'
  this.type = 'animal'
}

Pet.prototype.summary = function () {
  console.log(`${this.name} is a/ an ${this.type}`)
}

Pet.prototype.setName = function (name) {
  this.name = name
}

function Dog() {
  Pet.call(this)
  this.type = 'Dog'

}


util.inherits(Dog, Pet)

var dog = new Dog()
dog.setName('jj')
dog.summary()