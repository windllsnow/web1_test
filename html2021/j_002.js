while (true) {
    let yourAge = prompt("Enter  your age , please!");

    yourAge = Number(yourAge);
    console.log(yourAge, typeof yourAge);
    //age === NaN     或 age == NaN 不行
    if (isNaN(yourAge)) {
        alert("GG! PLease English! Thankyou! ");
        console.log(`your key-in words is${yourAge}`);
    } else {
        if (yourAge < 0) {
            alert("請輸入正確的年齡!(年齡 需>= 0)");
        } else if (yourAge <= 12) {
            alert("你的第一張兒童票 100 元");
            break;
        } else if (yourAge > 12 && yourAge <= 65) {
            alert("你的票價是 350 元");
            break;
        } else if (yourAge > 65 && yourAge < 150) {
            alert("你的敬老票100 元");
            break;
        } else {
            alert("請輸入正確年齡(<150)");
        }
    }
}
