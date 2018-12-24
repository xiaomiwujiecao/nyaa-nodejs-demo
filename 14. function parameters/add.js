var addon = require('./build/Release/addon')
console.log(addon.add(1,23))
console.log(addon.add(1,NaN))
console.log(addon.add(1,))