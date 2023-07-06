"use strict";
function factorial(num) {
    let factorialNumber = 1;
    for (let i = 1; i <= num; i++) {
        factorialNumber *= i;
    }
    console.log(factorialNumber);
    return factorialNumber;
}
factorial(6);
