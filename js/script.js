const userName = prompt('Inserisci qui il tuo nome')
const userSurname = prompt('Inserisci qui il tuo cognome')
const userColor = prompt('Inserisci qui il tuo colore preferito')

document.getElementById('userPassword').innerHTML = `${userName + userSurname + userColor + '23'}`
