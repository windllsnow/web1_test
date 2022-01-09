//Object

let Wilson = {
    firstName: "John",
    lastName: "Smith",
    age: 36,
    is_married: false,
    spouse: null,

    //methods
    sayhi() {
        console.log(`Hello & hi, my age is   ${this.age} years old`);
    },
    walk(name) {
        console.log(`${name} is  walking...`);
    },
};

//[] ,dot notation
console.log(Wilson.firstName); //值 ，所以要輸出
Wilson.sayhi(); // 函數 且 裡有輸出 ，所以直接IWN
Wilson.walk("John");

console.log(typeof Wilson);

//Array is a special type of object
let friends = ["Job", "Bon", "Bob"];
console.log(typeof friends);
