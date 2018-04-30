var Animal = require('./animal');
var Elephant = require('./Elephant');
var Fish = require('./Fish');



let goldFish = new Fish('goldy', 10, 'tank');
let billy = new Animal('Billy', 500, 100);
let gorgeia = new Animal('gorge', 400);
let thomas = new Elephant("Thomas", 3000, 350);
console.log(gorgeia.mate(billy))