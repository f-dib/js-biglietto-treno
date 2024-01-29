const PassengerName = prompt ('Nome e Cognome');
const Age = Number(prompt ('Età'));
const StartStation = prompt ('Stazione di Partenza');
const EndStation = prompt ('Stazione di Arrivo');
const Distance = Number(prompt ('Distanza in Km'));

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let hour = today.getHours();
let minute = String(today.getMinutes());

if (minute.length < 2) {
    minute = 0 + minute;
}

today = dd + '/' + mm + '/' + yyyy;
time = hour + ':' + minute;

let price = Distance * 0.21;
let arrival = Distance / 5;

if (Age <= 17) {
    price = price - ((price * 20) / 100);
} else if (Age >= 65) {
    price = price - ((price * 40) / 100);
}


document.getElementById("date_of_issue").innerHTML = `Emesso il: ${today} alle ore ${time}`;
document.getElementById("sum_info").innerHTML = `Viaggio da ${StartStation} a ${EndStation} il ${today} alle ore ${time}`;
document.getElementById("s_station").innerHTML = StartStation;
document.getElementById("e_station").innerHTML = EndStation;
document.getElementById("passenger_name").innerHTML = PassengerName;
document.getElementById("departure_date"). innerHTML = `Partenza: ${dd}/${mm}/${yyyy} alle ${time}`;
document.getElementById("arrival_time"). innerHTML = `Minuti all'arrivo: ${arrival}`;
document.getElementById('price').innerHTML = `${price.toFixed(2)} €`;