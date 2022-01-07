class MyClassName {
    setName(name) {
        this.name = name;
    }
    speak() {
        if (this.name === undefined) {
            this.name = "unname puppy";
        }
        console.log(`WOof woof says the dog named ${this.name}`);
    }
}
const thing = new MyClassName();
thing.setName("Doggo  McDogface");
thing.speak();

console.log("________________________________________________");

class MyClassName1 {
    setName(name) {
        // this.name = name;
    }
    speak() {
        if (this.name === undefined) {
            this.name = "unname puppy";
        }
        console.log(`WOof woof says the dog named ${this.name}`);
    }
}
const thing1 = new MyClassName1();
thing1.setName("Doggo  McDogface");
thing1.speak();
