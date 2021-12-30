console.log("page successfully loaded script.js");

var website =  "https://www.google.com/";
var teacherName = "Kalob Taulien";

console.log(teacherName);
console.log(website);

if (teacherName == "Kalob Taulien") {
    
    let apple = 1; //只作用在當前的區塊
    const height = "6'0\""//只作用在當前的區塊
    var b = 2.0;//全區
    console.log("I have ", apple, "apples");
    
    console.log("I am ", height);
}

console.log("I am ", b); 


//data  types

const str = "String";
const num = 1;
const flt =3.13;
const bool = true;
const list = [1,4,5,6];
const thing =null;
const notDefined = undefined;
const getAge = function (){return 21;}
const obj = {
    'name' : 'Kalob',
    'profession' : 'Coding teacher'
};


const twitter = "@12345";
if (twitter == "@KalobTaulien"){
    console.log("Twitter handle")
}else if(twitter == "@John"){
    console.log("GG sorry!  Your twitter  now is John");
}else{
    console.log("GG sorry!  Your twitter  now is", twitter);
}
//字串 操作
// let  ____=""
//___.search
//___.slice(_,_)
//___.substr(_,_)
//___.replace(_,_)
//___.toUpperCase()
//___.toLowerCase()
//___.trim() 排除 space的 字串
//___.split(" ") 用 什麼分 割 且 轉 成 []
//___.length    ====> ___[0] 或___[3]


//typeof(____)
//強制轉換 型態   一樣
// 如 Number("123")