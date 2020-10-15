// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// creo una variabile addition a cui verranno sommati i valori inseriti dall'utente
var addition = 0;

// chiedo all'utente di inserire i dati per 5 volte con un ciclo for
for (var i = 0; i < 5; i++) {
    // inserisci il numero
    var number = parseInt(prompt('inserisci un numero' + (i + 1)));
    // verifico che l'utente abbia effettivamente inserito un  numero con isNaN
    if (!isNaN(number)) {
        // stampo tutti i numeri inseriti dall'utente
        console.log('il ' + (i + 1) + '°'  + ' numero inserito è: ' + number);
        // ridefinisco la variabile addition come somma + ogni numero inserito dall'utente
        var addition = addition + number;
    } else {
        console.log('non hai inserito dei numeri')
    }
}
// algoritmo per stampare la somma dei numeri inseriti dall'utente
console.log('la somma dei numeri inseriti dall\'utente è: ' + addition);
