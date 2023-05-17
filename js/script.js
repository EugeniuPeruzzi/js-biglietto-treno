// Recupero i dati del utente
let travel_distance = parseInt(prompt('Quanti kilometri devi percorrere?'));

let user_age = parseInt(prompt('Quale e la tua eta?'));

// Definisco le variabili
let price = 0.21;

let full_price = (travel_distance * price);

let under_18_price;

let over_65_price;

// Definisco i casi
if (isNaN(travel_distance) || isNaN(user_age) || (user_age===0) || (travel_distance===0)){
    alert('Uno dei due numeri non e un numero');
}

else if (user_age < 18){
    under_18_price = (full_price - (full_price * 20 / 100)).toFixed(2);
    document.getElementById('ticket_price').innerHTML = `Il prezzo under 18 e di ${under_18_price}$`;
}

else if (user_age > 65){
    over_65_price = (full_price - (full_price * 40 / 100)).toFixed(2);
    document.getElementById('ticket_price').innerHTML = `Il prezzo over 65 e di ${over_65_price}$`;
}

else {
    document.getElementById('ticket_price').innerHTML = `Il prezzo Intero e di ${full_price}$`;
}
// Stampo a schermo il risultato