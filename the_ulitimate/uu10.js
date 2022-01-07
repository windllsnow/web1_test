class Person {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`hello ${this.name}`);
    }

    setName(name) {
        this.name = name;
    }
}

const Kalob = new Person("Kully");

Kalob.greeting();
Kalob.setName("Kully");
Kalob.greeting();
