const opcional1 = require("readline-sync");

let number = parseFloat(opcional1.question('Digite um numero: '))


if( number%1 === 0){
    console.log('inteiro')
}

else{console.log('Decimal')}