
var Base = require('./base/base');
var Lorem = require('./provider/lorem');

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

    
}

var data = new DataFake();

console.log(data.words(3,true));



// module.exports = DataFake;