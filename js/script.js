/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22 */

const userName = prompt('Scrivi il tuo nome');
const userLastName = prompt('Scrivi il tuo cognome')
const favoutiteColor = prompt('Scrivi il tuo colore prederito')
const yearCurrent = 22;


// metodo concatenato
// const newPassword = userName + userLastName + favoutiteColor + yearCurrent;

// metodo con template literals 
const newPassword = `${userName}${userLastName}${favoutiteColor}${yearCurrent}`;

document.getElementById('new-password').innerHTML += newPassword;