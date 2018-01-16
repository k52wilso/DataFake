# DataFake

DataFake is a JSON library that generates fake data for you. This is great for front-end developers who do not want to deal with back-end

DataFake is heavily inspired by Faker's [Faker](https://github.com/fzaninotto/Faker).


# Table of Contents

- [Installation](#installation)

## Installation

```sh
npm install datafake
```

## Basic Usage

Use `new DataFake()` to create and initialize some fake data, which can generate data by accessing properties named after the type of data you want.

```javascript
<?php
// require DataFake
var DataFake = require('datafake');

// use the factory to create a Faker\Generator instance
var data = new DataFake();

// generate data by accessing functions
console.log(data.randomDigit());
  // 5;
console.log(data.randomNumber(3));
  // 344 of length '3'
console.log(data.shuffle([1,2,3]));
 // [3,1,2]
```