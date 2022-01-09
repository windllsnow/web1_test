for (i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("you see me 5");
        continue; //continue 用來 回上層迴圈它下面不會跑
        console.log(" never seen ");
    } else {
        console.log(i);
    }
}
console.log(`the last ${i}`);

let count = 0;
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
        count++;
    }
}
console.log(count);

//HOw to  loop through an array

friends1 = ["joshsh", "johnhn", "jadee"];

for (let i = 0; i < friends1.length; i++) {
    console.log(friends1[i].toUpperCase());
}
