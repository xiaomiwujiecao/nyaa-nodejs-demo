var map = require('./build/Release/map')
var res = map(['芙蓉', '话费', '好吃的'], function () {
  return arguments
})

console.log(res)