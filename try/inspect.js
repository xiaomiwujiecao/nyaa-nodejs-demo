const obj = {
    foo:1
}
obj.inspect = function () {
    return "覆盖输出"
}
console.log(obj)