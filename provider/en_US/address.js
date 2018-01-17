
const addresses = [{
    city:'Salt Lake City',
    secondAddress:'Suite 691',
    state:'New Mexico',
    stateAbbr:'OH',
    streetName:'Mary Lou',
    address:'439 Karley Loaf',
    postcode:'12334',
    country:'USA',
},{
    city:'Toronto',
    secondAddress:'Suite 55',
    state:'Ontario',
    stateAbbr:'ON',
    streetName:'Mary Lou',
    address:'439 Karley Loaf',
    postcode:'12334',
    country:'CAN',
},{
    city:'New York',
    secondAddress:'Suite 34',
    state:'New Mexico',
    stateAbbr:'OH',
    streetName:'Mary Lou',
    address:'439 Karley Loaf',
    postcode:'12334',
    country:'USA',
}
];

class Address {

    //return a city
    addresses(){
        return addresses;
    }
    getAddress(){
        let index = Math.floor((Math.random() * addresses.length));
        return addresses[index].address;
    }
    city(){
        let index = Math.floor((Math.random() * addresses.length));
        return addresses[index].city;
    }

    //returns all cities
    cities(){
        return addresses.map((address) => {
            return address.city;
        });
    }

    //return all countries
    countries(){
        return addresses.map((address) => {
            return address.country;
        });
    }


}

module.exports = Address;