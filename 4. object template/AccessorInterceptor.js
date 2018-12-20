const pet = {
  name: "蛋花汤",
  type: '🐶',
  get kind() {
    return this.type == "🐶" ? '狗' : "外星人"
  },
  set kind(type) {
    return this.type = type === "🐶" ? '🐶' : "👽"
  }
}


pet.kind = "变异"
console.log(pet.kind)