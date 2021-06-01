// Snack 1 -  L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var firstWord = prompt('Inserisci la prima parola');
var secondWord = prompt('Inserisci la seconda parola');

if(firstWord.length > secondWord.length){
    document.getElementById('risultato-parole').innerHTML = 'La parola più corta è: ' + secondWord + 'e la più lunga è: ' + firstWord;
} else if(firstWord.length < secondWord.length){
    document.getElementById('risultato-parole').innerHTML = 'La parola più corta è: ' + firstWord + ' e la più lunga è: ' + secondWord;
} else {
    document.getElementById('risultato-parole').innerHTML = 'Le parole hanno la stessa lunghezza e sono ' + firstWord + ' e ' + secondWord;
}



// Snack 2 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri   inseriti. Esegui questo programma in due versioni, con il for e con il while.

// soluzione con il for
var somma = 0;
for(var i = 0; i < 5; i++){
    var numeroUser = parseInt(prompt('Inserisci un numero da sommare'));
    somma += numeroUser;
}

document.getElementById('risultato-somma-for').innerHTML += somma;

// soluzione con il while
var j = 0;
var somma = 0;
while(j < 5){
    var numeroUser = parseInt(prompt('Inserisci un numero da sommare'));
    somma += numeroUser;
    j++;
}

document.getElementById('risultato-somma-while').innerHTML += somma;







// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.