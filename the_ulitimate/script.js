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

//template  literal 字串

let lst = [1,"two",[3],"four",5.11];
lst.push(1);
console.log(lst);
let lstgg = lst.pop();
console.log(lstgg);
console.log(lst);



//i從0開始， 是否 i <= lst，是 i+1，不是 跳 出去
for(let i = 0; i <= lst.length;i++){
    console.log(i,lst[i]); 

}
// const kk =document.querySelectorAll(".thisclass");
// console.log(kk);//啊知，可能是沒載 jQuery
//___________________________________________________________
// const elements = document.querySelectorAll("li");
// elements.forEach(node => {
//     node.innerText = "this is a changed";
// });
//_________________________________________________________
// elements.forEach((node, index) => {
//     node.innerText = `Hello this is item ${index+1}`
// });
//___________________________________________________________
// elements.forEach(node => {
//     node.classList.add("custom-class", "secondary-class") ;
// });
//___________________________________________________________
function AddNumbers(num1,num2){
    
    const total1 =Number(num1)+Number(num2);
    return "an answers"+"___"+ total1;
}
const total = AddNumbers(1,"5.5");
console.log(total);


function hehe(Name,...numbers){
    let total11=0

    for (index in numbers){
        console.log(numbers[index]);//依序印出  每個值
        total11 = total11 +numbers[index];
    }

    return `${Name}: the total is ${total11}`;  //函數 回傳  加總
} 
const newTotal = hehe("Peter",1,4,7,13)
console.log(newTotal);

const person = {
    'name' : 'John',
    'age' : 18,
    'height' : 280,
    'speak' : function(want ="cookies") {
        console.log(`Meow, I want the ${want}`);
    }
}
person.speak();