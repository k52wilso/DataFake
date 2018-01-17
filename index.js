
var Base = require('./base/base');
var Lorem = require('./provider/lorem');
var Person = require('./provider/en_US/person');
var Address = require('./provider/en_US/address');

let instance = null;

class DataFake {

    constructor(){
        // Create a singleton
        if(!instance){
            instance = this;
        }

        // Functions imported
        this.base = new Base();
        this.lorem = new Lorem();
        this.person = new Person();
        this.address = new Address();

        return instance;
    }


    // BASE FUNCTIONS
    randomDigit(){
        return this.base.randomDigit();
    }
    randomNumber(length){
        return this.base.randomNumber(length);
    }
    randomFloat(length,decimals){
        return this.base.randomFloat(length,decimals);
    }
    numberBetween(min, max) {
        return this.base.numberBetween(min,max);
    }
    randomLetter(){
        return this.base.randomLetter();
    }
    randomElements(arr,count) {
        return this.base.randomElements(arr,count);
    }
    randomElement(arr) {
        return this.base.randomElement(arr);
    }
    shuffle(obj){
        return this.base.shuffle(obj);
    }

    //Lorem Functions
    word(){
        return this.lorem.word();
    }
    words(number,asText){
        return this.lorem.words(number,asText);
    }
    text(nChars){
        return this.lorem.text(nChars);
    }

    // en_US Person
    title(gender){
        return this.person.title(gender);
    }
    name(gender){
        return this.person.name(gender);
    }
    
    // en_US Address
    addresses() {
        return this.address.addresses();
    }
    getAddress(){
        return this.address.getAddress();
    }
    city(){
        return this.address.city();
    }
    cities(){
        return this.address.cities();
    }
    countries(){
        return this.address.countries();
    }
}

var data = new DataFake();

console.log(data.addresses());



// module.exports = DataFake;