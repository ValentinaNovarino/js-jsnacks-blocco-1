// Stampa le potenze di 2 senza superare il numero 1000.

// creo una variabile di appoggio per il numero 2 e per la potenza calcolata
var base = 2;
var potenza = 1;

// calcolo le potenze di due fino ad un i casuale i < 20
for (var i = 0; i < 20; i++) {
    // stampo quando la potenza calcolata è minore di 1000
    potenza = Math.pow(base, i);
    if (potenza < 1000) {
        console.log(potenza);
    }
}
