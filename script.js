/* PALIDROMA */
/*
Chiedere all’utente di inserire una parola 
Creare una  funzione per capire se la parola inserita
è palindroma
*/

/*
const word = prompt("Digit a word");

for (let i = 0; i < word.length; i++) {
    function isPalindrome(word) {
        if (word.charAt(0) == word.charAt(word.lenght - 1) && word.charAt(i) == word.charAt(word.lenght - i)) {
            return true;
        } else {
            return false;
        }
    } 
}

document.writeln("This is the word you typed: " + word);

if (isPalindrome(word) == true) {
    document.writeln("Your word is a palindrome word!");
} else {
    document.writeln("Your word isn't a palindrome word");
}
*/


/* PARI E DISPARI */

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


let userOddOrEven = prompt("How it will be the sum of the numbers, ODD or EVEN?");
let userNumber = parseInt(prompt("Type your number, from 1 to 5"));

document.writeln("Your choise: " + userOddOrEven);
document.writeln("Your number: " + userNumber);

let userEven;

if (userOddOrEven.toLowerCase = "even") {
    userEven = true;
} else if (userOddOrEven.toLowerCase = "odd") {
    userEven = false;
}

document.writeln(userEven);

function getRandomNumber (min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pcNumber = getRandomNumber(1, 5);
document.writeln("Pc number: " + pcNumber);

function valueOddOrEven (value) {
    if (value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let sum = userNumber + pcNumber;
document.writeln("The sum of the numbers is: " + sum);


let sumEven;

if (valueOddOrEven(sum)) {
    sumEven = true; 
} else {
    sumEven = false;
}

document.writeln(sumEven);


if (sumEven == userEven) {
    document.writeln("Congratulations, you guessed!")
} else {
    document.writeln("You nearly got it, maybe you'll get it next time :)")
}
