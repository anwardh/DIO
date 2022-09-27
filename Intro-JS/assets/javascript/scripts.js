// console.log ("Hello World, Anwar!");

var currentNumberWrapper = document.getElementById("currentNumber"); // Criação da variável currentNumberWrapper que irá receber o id 'currentNumber' no Html, na tag span do documento
var currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
