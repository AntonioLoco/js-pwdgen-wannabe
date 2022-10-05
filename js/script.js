// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// INPUT 
const userName = prompt("Qual'è il tuo nome?");
console.log(userName);

const userSurname = prompt("Qual'è il tuo cognome?");
console.log(userSurname);

const favoriteColor = prompt("Qual'è il tuo colore preferito?");
console.log(favoriteColor);

// ELABORAZIONE
const pwd = `${userName}${userSurname}${favoriteColor}21`;

// OUTPUT
document.getElementById("pwd").innerHTML = pwd;


