let userName = prompt('Qual è il tuo nome?');
let userSurname = prompt('Qual è il tuo cognome?');
let favouriteColor = prompt('Qual è il tuo colore preferito?');
let messaggio = `${userName} ${userSurname} ${favouriteColor}`;
document.getElementById('app').innerHTML = messaggio;