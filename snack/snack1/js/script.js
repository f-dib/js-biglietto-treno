function temperature() {

    document.getElementById("choose").style.display = 'none';
    document.getElementById("background").style.display = 'block';

    const temperaturec = Number(prompt ('Indicami una tempertura in gradi Celsius'));
    
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
}

function averagemedia() {
    
    document.getElementById("choose").style.display = 'none';
    document.getElementById("bg2").style.display = 'block';
    
    const averageMedia1 = Number(prompt ('Indicami un numero'));
    const averageMedia2 = Number(prompt ('Indicami un numero'));
    const averageMedia3 = Number(prompt ('Indicami un numero'));



    let averageCalc = ((averageMedia1 + averageMedia2 + averageMedia3) / 3).toFixed(2);

    if (!isNaN(averageMedia1) && !isNaN(averageMedia2) && !isNaN(averageMedia3)) {
    
    document.getElementById("average").innerHTML = `${averageCalc}`;

    } else if (isNaN(averageMedia1) || isNaN(averageMedia2) || isNaN(averageMedia3)) {

    document.getElementById("correct2").style.display = 'none';
    document.getElementById("wrong2").style.display = 'block';
    document.getElementById("message2").innerHTML = 'Non hai inserito un numero nei campi Premi F5 per ricaricare la pagina';
    }
}

document.getElementById("btn1").addEventListener('click', temperature);
document.getElementById("btn2").addEventListener('click', averagemedia);
