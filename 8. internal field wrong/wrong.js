const obj = require('./build/Release/internal_field_wrong')

console.log(obj)
console.log(obj.valueOf())
obj.getSummary.call({})