const t = require('./build/Release/template')
console.log(t)
let a = new t.TestClass
console.log('a::',a) // a:: TestClass { value: 233 }

console.log(a.get()) // 233



