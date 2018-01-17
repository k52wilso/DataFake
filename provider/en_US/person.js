
const names = [{
    firstName:'Jacob',
    lastName:'Doe',
    gender:'male'
},{
    firstName:'Heather',
    lastName:'Smith',
    gender:'female'
},{
    firstName:'Ryan',
    lastName:'Bell',
    gender:'female'
},{
    firstName:'Dylan',
    lastName:'Doe',
    gender:'male'
}
];

class Person {

    //Returns a Title
    title(gender){
        if(gender == 'female'){
            return "Ms.";
        }else{
            return "Mr.";
        }
    }

    //Returns a name based on given gender
    name(gender,length = names.length){
        let self = this;
        let index = Math.floor((Math.random() * names.length));
        let temp = names[index];
        if(length == 0){
            return 'No names found';
        }
        if(temp.gender == gender){
            return temp;
        }else{
           return self.name(gender,length-1);
        }
    }

    // 


}

module.exports = Person;