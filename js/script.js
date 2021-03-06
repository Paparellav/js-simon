// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Visualizzare nel browser i 5 numeri che l'utente dovrà memorizzare [*];
// Far partire un timer di 30 secondi dopo il quale i numeri verrano oscurati [*];
// Chiedere all'utente per 5 volte (ciclo for) tramite il prompt i numeri che ricorda di aver visto [*];
// Confrontare i numeri dell'utente con i numeri visualizzati [];
// Stampare il risultato finale e i numeri azzeccati [];

const numbersRange = 100;
const rndInt = 5;
const rndNumbersArray = generateRndNumbers(rndInt, numbersRange);
console.log(rndNumbersArray);

const numbers = document.getElementById("rnd-numbers");
numbers.innerHTML = rndNumbersArray;

setTimeout (myFunction, 2000);
setTimeout (askUser, 2500);

function myFunction () {
    numbers.classList.add("hidden");
}


function askUser () {
    const userArray = [];
    let userChoice = "";
    for (let i = 0; i < 5; i++) {
        userChoice = parseInt(prompt('Inserisci un numero che credi di aver memorizzato'));
        userArray.push(userChoice);
    }
    
    const commonNumbers = [];
    for (let i = 0; i < rndNumbersArray.length; i++) {
        if (rndNumbersArray[i] === userArray[i]) {
            commonNumbers.push(userArray[i]);
        }
    }

    console.log(commonNumbers);
    const result = document.getElementById("result");
    const result2 = document.getElementById("result2");
    const result3 = document.getElementById("result3");
    result.innerHTML = `I numeri inizialmente visualizzati erano: ${rndNumbersArray}.`;
    result2.innerHTML = `I numeri che TU hai inserito sono: ${userArray}`;
    result3.innerHTML = `I numeri in comune sono i seguenti: ${commonNumbers}`;

    return commonNumbers;
}

function generateRndNumbers (rndInt, numbersRange) {
    const rndNumbersArray = [];
    while (rndNumbersArray.length < rndInt) {
        const randomNumber = getRndInteger(rndInt, numbersRange);
        if (!rndNumbersArray.includes(randomNumber)) {
            rndNumbersArray.push(randomNumber);
        }
    }
    
    return rndNumbersArray;
}

function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}