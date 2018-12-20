const t = require('./build/Release/template')
console.log(t)
const result = t.funcCreateByTemplate()  // { funcCreateByTemplate: [Function: funcCreateByTemplate] }
console.log(result)  // this is a function