"use strict";
var numbers = [1.12, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11);
numbers.forEach(function (n) { return console.log(n.toFixed(1)); });
console.log(numbers);
