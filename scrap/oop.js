class Animal {
    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        } else {
            console.log("Error: provided name must be 2 characters or longer");
        }
    }
    set weight(newWeight) {
        if (newWeight > 100) {
            this._weight = newWeight;
        } else {
            console.log("Error: provided weight must be bigger then 100 ");
        }
    }
    constructor(name, weight, energyLevel) {
        this.name = name;
        this._weight = weight;
        this.foodAmount = 100;
        this.energyLevel = energyLevel;
        this.bodyTemperature = 35;
    }
    mate(partner) {
        if (this.constructor.name === partner.constructor.name) {
            let new_Baby = new Animal('son of ' + this.name + ' and ' + partner.name, 150)
            return new_Baby

        } else {
            console.log('mate is not good ');
        }
    }

    play() {
        this.energyLevel -= 50;
        console.log('energy lvl after playing :' + this.energyLevel);
    }
    eat(amount) {
        this.energyLevel += amount;
        console.log('energy lvl after eating :' + this.energyLevel);
    }
    greet() {
        console.log("Hello, I'm " + this.name);
    }

}



// console.log(billy.bodyTemperature)
// billy.play();

// console.log(billy.name)
// let jeffrey = new Animal("Jeffrey", 100);

class Fish extends Animal {
    constructor(name, weight, livingEara) {
        super(name, weight);
        this.livingEara = livingEara;
        this.bodyTemperature = 26;
    }
    get weight() {
        return this._weight;
    }

    set weight(newWeight) {
        if (newWeight < 100) {
            this._weight = newWeight;
        } else {
            console.log("Error: provided weight must be bigger then 0 and smaller then 100  ");
        }
    }
}


// goldFish.weight = 200;
// console.log(goldFish);

class Elephant extends Animal {
    constructor(name, weight, trunkLength) {
        super(name, weight);
        this.trunkLength = trunkLength;
    }
    greet() {
        console.log("Trumpets!");
    }
}
let goldFish = new Fish('goldy', 10, 'tank');
let billy = new Animal('Billy', 500, 100);
let gorgeia = new Animal('gorge', 400);
let thomas = new Elephant("Thomas", 3000, 350);
// console.log("The trunk length is: " + thomas.trunkLength);
// thomas.greet();



console.log(gorgeia.mate(billy))