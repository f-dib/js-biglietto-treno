const temperaturec = Number(prompt ('In dicami una tempertura in gradi Celsius'));

let temperatureF = (((temperaturec * 9) / 5) + 32);

if (!isNaN(temperaturec)) {
    
    document.getElementById("temperatureC").innerHTML = `${temperatureF}°F`;

    if (temperaturec <= 10){
        document.getElementById("background").style.backgroundImage = "url(./img/inverno.jpg)";
    }

    if (temperaturec > 10 && temperaturec <= 25){
        document.getElementById("background").style.backgroundImage = "url(./img/primavera.jpg)";
    }

    if (temperaturec > 25){
        document.getElementById("background").style.backgroundImage = "url(./img/sun.jpg)";
    }

} else if (isNaN(temperaturec)) {

    document.getElementById("correct").style.display = 'none';
    document.getElementById("wrong").style.display = 'block';
    document.getElementById("message").innerHTML = 'Non hai inserito un numero Premi F5 per ricaricare la pagina';
}
