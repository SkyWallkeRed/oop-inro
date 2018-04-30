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

module.exports = Animal