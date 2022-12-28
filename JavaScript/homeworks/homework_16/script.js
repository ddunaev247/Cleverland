'use strict';
function Cat(name, color) {
    this.name = name;
    this.color = color;
}

const margo = new Cat('Margo', 'white');
const sam = new Cat('Sam', 'white');
const barsik = new Cat('Barsik', 'spotted');
const umka = new Cat('Umka');
const zevs = new Cat('Zevs', 'gray');

Cat.prototype.sayMeow = function () {
    console.log(`${this.name} say Meow`);
};
function ownerCat(owner) {
    this.ownerName = owner;
    console.log(`${this.name} owner is ${this.ownerName}`);
}
ownerCat.call(margo, 'Daniil');
ownerCat.apply(sam, ['Dima']);

function getColorCat(color) {
    if (this.color === undefined) this.color = color;
    console.log(`${this.name} color - ${this.color}`);
}
const getColorMargo = getColorCat.bind(margo);
getColorMargo();
const getColorUmka = getColorCat.bind(umka, 'black');
getColorUmka();
