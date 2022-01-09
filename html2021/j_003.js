let x = 0;
// false, 0, "", undefined,null,NaN

if (x) {
    console.log("this is  truthy value");
} else {
    console.log("this is falsey value");
}

let frog1 = "Kate";
let frog2 = "Peter";
let frog3 = "Jade";

let frogs = ["John", "Sandy", "Alex", "Jim"];

//index , length
console.log(frogs[0]);
console.log(frogs.length);
// push , pop, shift, unshift  4 methods

console.log(frogs.pop()); // 後減 1
console.log(frogs.push("Alice")); //後加 1
console.log(frogs.shift()); // 前 減 1
console.log(frogs.unshift("Adele")); //前 加 1

console.log(frogs);

let xxyy = frogs.unshift("Peter");
console.log(frogs);
console.log(xxyy); //會回傳frogs 的長度

//Celsius to Fahrenheit
//多一行 ，可是可以 再運算  ，複 雜 時好用
function convert(oc) {
    return oc * 1.8 + 32;
}
let yt = convert(0);
console.log(yt);

//少 一行  函數等於 輸出
function convert1(oc1) {
    of1 = oc1 * 1.8 + 32;
    return console.log(of1);
}
convert1(0);
