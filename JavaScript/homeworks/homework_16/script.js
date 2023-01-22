'use strict';

class Message {
    constructor(text, nameUser, idUser) {
        this.text = text;
        this.nameUser = nameUser;
        this._idUser = idUser;
    }
    #secretСode = (Math.random() * 100).toFixed(0);

    get secretCodeForMessage() {
        console.log(`${this.#secretСode + this._idUser}`);
    }
}
const message = new Message('THIS TEXT', 'Alex', Date.now());
message.secretCodeForMessage;

(function () {
    let count = 0;
    for (let i = 0; i < 10; i++) {
        count += i;
    }
    console.log(count);
    return count;
})();

const number = (function () {
    const cacl = function () {
        let count = 0;
        for (let i = 0; i < 10; i++) {
            count += i;
        }
        console.log(count);
    };
    return { getNumber: cacl };
})();
number.getNumber();
