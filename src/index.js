"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class House {
    constructor(key) {
        this.door = false;
        this.tenants = [];
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log('Людина зайшла в будинок');
        }
        else {
            console.log('Двері зачинені');
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log('Двері відчинені');
        }
        else {
            console.log('Невірний ключ');
        }
    }
}
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 100000);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
//# sourceMappingURL=index.js.map