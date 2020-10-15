// Calcola la somma e la media dei numeri da 1 a 10.

// creo una variabile addiction che sarà 0 perchè non ho ancora cominciato a contare
var addiction = 0;

// creo un ciclo for con i valori di i min 1 max 10
for (var i = 1; i <= 10; i++) {
    // creo algoritmo della somma delle i
    addiction = addiction + i;
}
console.log('la somma delle i è: ' + addiction);

// creo algoritmo per la variabile media delle i dividendo addiction per numero max 10
var average = addiction / 10;
console.log('la media delle i è: ' + average);
