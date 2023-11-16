/*
esercizio di oggi:

(insicurissimo) password generator
nome repo: js - pwdgen - wannabe

Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23.
*/

// PRENDO L'INPUT DALL'UTENTE PER ASSEGNARE UN VALORE ALLE VARIABILI

const firstName = prompt('Inserisci il tuo nome:');
const surname = prompt('Inserisci il tuo cognome:')
const favColor = prompt('Inserisci il tuo colore preferito:')
let result = firstName + surname + favColor + 23;

// Visualizzo il risultato su un paragrafo con id mioId

document.getElementById('mioId').innerHTML = `Benvenuto ${firstName} ${surname} la tua password molto sicura sarà: ${result}`;