// Recupero i dati del utente
let travel_distance = parseInt(prompt('Quanti kilometri devi percorrere?'));
console.log(travel_distance, typeof travel_distance);

let user_age = parseInt(prompt('Quale e la tua eta?'));
console.log(user_age, typeof user_age);

// Definisco le variabili
let full_price = (travel_distance * 0.21);
console.log(full_price);

let under_18_price
console.log(under_18_price);

let over_65_price
console.log(over_65_price);

// Definisco i casi
if (isNaN(travel_distance) && isNaN(user_age)){
    console.log('Uno dei due numeri non e un numero');

}else if (user_age < 18){
    under_18_price  = (full_price - (full_price * 20 / 100))
    console.log(under_18_price)
    document.getElementById('ticket_price').innerHTML = `Il prezzo under 18 e di ${under_18_price}$`

}else if (user_age > 65){
    over_65_price = (full_price - (full_price * 40 / 100))
    console.log(over_65_price)
    document.getElementById('ticket_price').innerHTML = `Il prezzo over 65 e di ${over_65_price}$`

}else {
    document.getElementById('ticket_price').innerHTML = `Il prezzo Intero e di ${full_price}$`
}

// Stampo a schermo il risultato