class Elephant extends Animal {
    constructor(name, weight, trunkLength) {
        super(name, weight);
        this.trunkLength = trunkLength;
    }
    greet() {
        console.log("Trumpets!");
    }
}

module.exports = Elephant