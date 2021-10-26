// first method
let native = {
    name: "",
    age: "",
    gender: "",
    height: "",
    hobby: "",
}

console.log(native)

//second method

var native = new Object()
console.log(native)

//third method

function createObject(name, age, gender, height, hobby) {
    this.name = name
    this.age = age
    this.gender = gender
    this.height = height
    this.hobby = hobby
}

let newNative = new createObject("uJay", 13, "male", "6.1ft", "sleeping");
console.log(newNative)

//retrieval
// we have two methods of retrieving
// 1.) Dot notation

let age = newNative.age
console.log(age)

let ageb = newNative["age"]



