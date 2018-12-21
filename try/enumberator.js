var obj = {
    foo: 1,
    bar: 2
};
Object.defineProperty(obj, 'baz', { value: 3, enumerable: false });
console.log(obj);
console.log(obj.baz);
for (var key in obj) {
    console.log(key);
}
