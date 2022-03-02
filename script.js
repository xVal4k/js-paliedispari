/* PALIDROMA */
/*
Chiedere all’utente di inserire una parola 
Creare una  funzione per capire se la parola inserita
è palindroma
*/


const userWord = document.querySelector(".input-word");
const resultMessage = document.querySelector(".result-message");
let btnCheck = document.getElementById("btn-check");



btnCheck.addEventListener("click", function() {

    if (isPalindrome(userWord.value)) {
        resultMessage.innerHTML = "Your word is a palindrome word!";
    } else {
        resultMessage.innerHTML = "Your word is not a palindrome word";
    }
});


function isPalindrome(word) {

    let reverseWord = "";
    for (let i = 0; i < word.length; i++) {
        reverseWord = word[i] + reverseWord;
    }
    
    if (reverseWord == word) {
        return true;
    } else {
        return false;
    }
} 





/* PARI E DISPARI */

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// let userOddOrEven = prompt("How it will be the sum of the numbers, ODD or EVEN?");
// let userNumber = parseInt(prompt("Type your number, from 1 to 5"));


/*
document.writeln("Your choise: " + userOddOrEven);
document.writeln("Your number: " + userNumber);

let userEven;
if (userOddOrEven == "even") {
    userEven = true;
} else if (userOddOrEven == "odd") {
    userEven = false;
} else {
    document.writeln("Please try again and choose between ODD or EVEN");
}


let pcNumber = getRandomNumber(1, 5);
document.writeln("Pc number: " + pcNumber);

let sum = userNumber + pcNumber;
document.writeln("The sum of the numbers is: " + sum);


let sumEven;
if (valueOddOrEven(sum)) {
    sumEven = true; 
} else {
    sumEven = false;
}

if (sumEven == userEven) {
    document.writeln("Congratulations, you guessed!")
} else {
    document.writeln("You nearly got it, maybe you'll get it next time :)")
}

function getRandomNumber (min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function valueOddOrEven (value) {
    if (value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
*/
