// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let kmPercorrere = parseInt(prompt('Inserire il numero di km che si vogliono percorrere'));
console.log('Numero di km che si vogliono percorrere:', kmPercorrere);

let etaPasseggero = parseInt(prompt('Inserisci inserire età'));
console.log('Età:', etaPasseggero);

let prezzoBiglietto = (0.21 * kmPercorrere).toFixed(2);
// console.log('Prezzo del biglietto', prezzoBiglietto);

let prezzoBigliettoMinorenne = ((0.21 - (0.21 * 20 / 100)) * kmPercorrere).toFixed(2);
// console.log('Prezzo del biglietto per minorenne', prezzoBigliettoMinorenne);

let prezzoBigliettoOver = ((0.21 - (0.21 * 40 / 100)) * kmPercorrere).toFixed(2);
// console.log('Prezzo del biglietto per over 65', prezzoBigliettoOver);

if (etaPasseggero < 18) {
    console.log('Prezzo del biglietto per minorenne', prezzoBigliettoMinorenne);
} else if (etaPasseggero > 65) {
    console.log('Prezzo del biglietto per over 65', prezzoBigliettoOver);
} else {
    console.log('Prezzo del biglietto', prezzoBiglietto);
}
