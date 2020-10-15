// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// creo un array vuoto in cui inserire i numeri scelti dall'utente
var numbers = [];

// chiedo di inserire un numero all'utente per 6 volte attraverso un ciclo for
for (var i = 0; i < 6; i++) {
    // inserisci il numero
    var userNumbers = parseInt(prompt('inserisci un numero'));
    console.log(userNumbers);
    // inserisco i numeri inseriti dall'utente all'interno dall'array solo se sono dispari
    var rest = userNumbers % 2;
    if (rest != 0) {
        numbers.push(userNumbers);
    }
}

// stampo i numeri dispari scelti dall'utente
console.log('numeri dispari scelti: ' + numbers);
