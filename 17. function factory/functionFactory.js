const addon = require('./')
const fn = addon()
console.log(fn())

console.log(fn.name)
console.log(fn.toString())