# DataFake

DataFake is a JSON library that generates fake data for you. This is great for front-end developers who do not want to deal with back-end

DataFake is heavily inspired by Faker's [Faker](https://github.com/fzaninotto/Faker).


# Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Formatters](#formatters)
	- [Base](#base)

## Installation

```sh
npm install datafake
```

## Basic Usage

Use `new DataFake()` to create and initialize some fake data, which can generate data by accessing properties named after the type of data you want.

```javascript
// require DataFake
var DataFake = require('datafake');

// Create the DataFake instance
var data = new DataFake();

// generate data by accessing functions
console.log(data.randomDigit());
  // 5;
console.log(data.randomNumber(3));
  // 344 of length '3'
console.log(data.shuffle([1,2,3]));
 // [3,1,2]
```

## Formatters

Properties such as (`name`, `address`, and `lorem`) are called "formatters". DataFake used many of them, packaged in "providers". Here is a list of the bundled formatters in the default locale.

### `\Base`

    randomDigit             // 7
    randomDigitNotNull      // 5
    randomNumber(length) // 79907610
    randomFloat(length,decimals) // 48.8932
    numberBetween(min,max) // 8567
    randomLetter            // 'b'
    // returns randomly ordered subsequence of a provided array
    randomElements(array,count) // ['c']
    randomElement(array) // 'b'
    shuffle('hello, world') // 'rlo,h eoldlw'
    shuffle(array) // [2, 1, 3]  