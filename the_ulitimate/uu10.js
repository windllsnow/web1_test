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

const kalob = new Person("Kully");

kalob.greeting();
kalob.setName("KuOOOOO");
kalob.greeting();
