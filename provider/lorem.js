
const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetuer",
"adipiscing", "elit", "sed", "diam", "nonummy", "nibh", "euismod",
"tincidunt", "ut", "laoreet", "dolore", "magna", "aliquam", "erat"];

class Lorem {
    
    // Create a random word
    // Parameter: None
    // Return: a string of lorem ipsum
    word(){
        let index = Math.floor((Math.random() * words.length));
        return words[index];
    }

    // Create a random words
    // Parameter: 'number' number of words to return , 'asText' is to return as array or string
    // Return: string or array of text
    words(number,asText){
        let obj;
        if(asText){
            obj = "";
            for(let i = 0 ; i < number ;i++){
                let index = Math.floor((Math.random() * words.length));
                obj += words[index] + " ";
            }
        }else{
            obj = [];
            for(let i = 0 ; i < number ;i++){
                let index = Math.floor((Math.random() * words.length));
                obj.push(words[index]);
            }
        }
        return obj;
    }

}

module.exports = Lorem;