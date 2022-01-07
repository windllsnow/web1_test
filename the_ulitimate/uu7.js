const person5 = {
    name: "Kalob",
    //以下函數
    speak(name) {
        console.log(`${this.name} Meow~~`); //this 在 person5 直接抓 name
    },
};
person5.speak();

function counter() {
    if (this.total === undefined) {
        this.total = 1;
    } else {
        this.total++;
    }
    console.log("Running counter. Total is ", this.total);
}
counter();
counter();

//跟上面function 效果一樣
const counter1 = () => {
    if (this.total1 === undefined) {
        this.total1 = 1;
    } else {
        this.total1++;
    }
    console.log("Running counter. Total is ", this.total1);
};
counter1();
counter1();
