"use strict";
const welcomeFunc = (names) => {
    names.forEach(name => {
        console.log(`hello ${name}!`);
    });
};
welcomeFunc(["craig", "shea", "jenna"]);
const sumAllNumbersInArray = (numbers) => {
    let output = 0;
    numbers.forEach(number => {
        output += number;
    });
    output += 1;
    return output;
};
console.log(sumAllNumbersInArray([1, 2, 3, 4, 5, 6]));
