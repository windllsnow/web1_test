while (true) {
    let number = prompt("Guess Number(1-10)?");
    number = Number(number);

    const randomNumber = Math.floor(Math.random() * 10);

    if (number === randomNumber) {
        alert("you win !   Bye!!! ");
        console.log(
            "This turns Number is " + randomNumber + " Congratulation!!"
        );
        break;
    } else {
        console.log(
            "You guessed " + number + " But the right answer was",
            randomNumber
        );
    }
}
