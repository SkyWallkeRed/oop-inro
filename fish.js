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


module.exports = Fish