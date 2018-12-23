const obj = require('./build/Release/internal_field_right')

function test() {
  const ret = {}
  for (let i = 0; i < 10; i++) {
    ret[i] = obj.create(i)
  }
  return ret
}
console.log(test())
const ret = test()
delete ret[0]