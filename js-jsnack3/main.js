// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

// chiedo all'utente di inserire il numero N
var userNumber = parseInt(prompt('di quanti numeri vuoi stampare il cubo?'));
console.log(userNumber);

// calcolo il cubo partendo da 0 fino al numero N indicato dall'utente
for (var i = 0; i <= userNumber; i++) {
    if (!isNaN(userNumber)) {
        console.log(i * i * i);
    }
}
