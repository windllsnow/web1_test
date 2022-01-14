//array
//________________________________
var aaa = ["apple", "banana", "cherry", "watermelon"];
aaa.forEach(function (item, index, array) {
	console.log(item, index);
});

//array
//___________________________________
/*
$aaa = array("apple", "banana","cherry");
print_r($aaa);
var_dump($aaa);
var_export($aaa);
*/
//____________________
//Object
//__
const kk = {
	name: "Kate",
	"favorite food": ["pizza", "tacos", "salmon"],
	age: 30,
	children: [
		{
			name: "Zebra",
			age: 3,
		},
		{
			name: "Cat",
			age: 4,
		},
	],
	"//comment": "像JavaScripts 的 Object  沒有名稱而已",
	"//_comment": "comment 的方 式…..",
};
console.log(kk);
//const kk=() =>{}  跟  function kk() {} 一樣
//
//
//_____________________________________________
//php/Object
//___
/*class foo {
    function do_foo() {
        echo "doing foo.";
    }
}
$bar = new foo();
$bar -> do_foo();*/
