let answers = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 100;
let count = 5;
while (count > 0) {
    alert(`目前有${count}次機會，請把握`);
    let guess = prompt(`Make your guess : (between ${n1} and ${n2})`);
    guess = Number(guess);

    if (guess < n1 || guess > n2) {
        alert("Please enter the right number in the range(1~100)");
        count--;
        continue; //沒有巢狀，所以用continue 去 回上層
    }
    if (guess == answers) {
        alert(`The correct is ${answers}`);
        alert("You win  !!   Bye~");
        console.log(answers);
        break;
    } else if (guess < answers) {
        alert(`Bigger!!`);
        count--;
    } else if (guess > answers) {
        alert(`Smaller!!`);
        count--;
    }
}
console.log("bye___");
