

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

class Base {
    
    // Create a random digit
    // Parameter: None
    // Return: int 
    randomDigit(){
        let digit = Math.floor((Math.random() * 10000000) + 0);
        return digit;
    }

    // Create a random number 
    // Parameter: A given length for digit
    // Return: int of length 'length'
    randomNumber(length){
        let res = "";
        if(length == 0){
            return 0;
        }

        
        for(let i = 0 ; i < length ; i++){
            let digit = Math.floor((Math.random() * 9) + 0);
            res += digit;
        }
        return Number(res);
    }

    // Create a random float  
    // Parameter: A given length for digit and decimals is for precision 
    // Return: int of length 'length'
    randomFloat(length,decimals){
        var factor = Math.pow(10, decimals);

      
        let res = "";
        if(length == 0){
            res = "0.";
            for(let i = 0;i< decimals; i++){
                res += "0";
            }
            
        }else{
            // get the number before decimal
            for(let i = 0;i< length; i++){
                let digit = Math.floor((Math.random() * 9) + 0);
                res += digit;
            }
            res += ".";
            // get the number after the decimal
            for(let i = 0;i< decimals; i++){
                let digit = Math.floor((Math.random() * 9) + 0);
                res += digit;
            }
            
        }
        
        return parseFloat(res);
    }

    // Create a random number between interval  
    // Parameter: A given min and max number
    // Return: int between interval
    numberBetween(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    // Create a random letter  
    // Parameter: none
    // Return: int between interval
    randomLetter() {
        let res = "";
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        res = str.charAt(Math.floor(Math.random() * (str.length) + 0));
        return res;
    }

    // Create an array of random elements;  
    // Parameter: array and count which is the size of the new array
    // Return: int between interval
    randomElements(arr,count) {
        let newArr = [];
        for(let i = 0; i < count ;i++){
            let element = arr[Math.floor(Math.random() * (arr.length))];
            newArr.push(element);
        }
        return newArr;
    }

    // Return a random element;  
    // Parameter: array and count which is the size of the new array
    // Return: int between interval
    randomElement(arr) {
        
        return arr[Math.floor(Math.random() * (arr.length))];
        
    }

    // returns given array shuffled;  
    // Parameter: array to be shuffled
    // Return: the array shuffled
    shuffle(obj) {
        let set = new Set(); // 2
        if(typeof obj == 'string'){ // test 
            let copy = "";
            let end = 0;
            while(end != obj.length){
                let index = Math.floor(Math.random() * (obj.length)); 
                if(set.has(index)){
                    //do nothing
                }else{//
                    set.add(index);
                    end++;
                }
            }
            for(let v of set){
                copy += obj.charAt(v);
            }
            return copy;
        }else if (Array.isArray(obj)){
            let copy = [];
            let end = 0;
            while(end != obj.length){
                let index = Math.floor(Math.random() * (obj.length)); 
                if(set.has(index)){
                    //do nothing
                }else{//
                    set.add(index);
                    end++;
                }
            }
            for(let v of set){
                copy.push(obj[v])
            }
            return copy;
        }else{
           return "Parameter must be a string or an Array"; 
        }
    }

}

module.exports = Base;