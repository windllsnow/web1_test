try {
    throw "Kalobssss custom error"; //函數內 用throw 外 用throws, 後有錯 中斷輸出____，沒有就正常

    console.log("A THING in here");
} catch (error) {
    console.warn("error: " + error);
} finally {
    //do something here
}
//more code here
console.log("S____________");

const num1 = 10;
try {
    num += 20;

    num1 += 2;
} catch (e) {
    console.warn("error loading : ", e);
    console.log("gg!");
} finally {
    throw "undefined1";
    console.log("The finally number is ", num);
}
