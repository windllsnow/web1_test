let d = new Date(2025, 0, 15);
console.log(d); // 0 是 1月
console.log(d.getMonth());

console.log("--------------------------------");
//destructuring
//意思是 用 const [] const{} 去 取 ，不用months[0] 或person3[0]
//寫法 const [str...] = 變數名
//寫法 const {key...} = 變數名
//destructuring an array
const months = ["January", "February", "December"];
const [jan, feb] = months;
console.log(jan, feb);
console.log(months);

console.log("--------------------------------");
const person3 = {
    name: "John",

    instagram: "@ccccc",

    somethingElse: "somethingelse",
};

const { name, instagram, somethingElse } = person3;

console.log(name, person3);

console.log("--------------------------------");

("use strict");
const person4 = {
    name: "John",
    age: 31,
};

//delete person4.name;
delete person4["age"]; //都有用
delete person4.age; //都有用

console.log(person4);
