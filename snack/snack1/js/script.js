function temperature() {

    document.getElementById("choose").style.display = 'none';
    document.getElementById("background").style.display = 'block';

    const temperaturec = Number(prompt ('Indicami una tempertura in gradi Celsius'));
    
    let temperatureF = (((temperaturec * 9) / 5) + 32);
    
    if (!isNaN(temperaturec)) {
        
        document.getElementById("temperatureC").innerHTML = `${temperatureF}°F`;
    
        if (temperaturec <= 10){
            document.getElementById("background").style.backgroundImage = "url(./img/inverno.jpg)";
            document.getElementById("background").style.backgroundSize = "cover";
            document.getElementById("background").style.backgroundPosition = "center";
        }
    
        if (temperaturec > 10 && temperaturec <= 25){
            document.getElementById("background").style.backgroundImage = "url(./img/primavera.jpg)";
            document.getElementById("background").style.backgroundSize = "cover";
            document.getElementById("background").style.backgroundPosition = "center";
        }
    
        if (temperaturec > 25){
            document.getElementById("background").style.backgroundImage = "url(./img/sun.jpg)";
            document.getElementById("background").style.backgroundSize = "cover";
            document.getElementById("background").style.backgroundPosition = "center";
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

function rockPaperScissors() {

    document.getElementById("choose").style.display = 'none';
    document.getElementById("bg3").style.display = 'block';

    const resultElement = document.getElementById("result");
    const chioceElement = prompt("Scegli 'carta', 'forbice', 'sasso'");
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    let computerConversion;

    if(computerChoice == 1) {
        computerConversion = "carta";
    } else if (computerChoice == 2) {
        computerConversion = "forbice";
    } else {
        computerConversion = "sasso";
    }

    let vittoria = false;


    if(chioceElement == computerConversion) {

        document.getElementById("title").innerHTML = `Hai scelto ${chioceElement}, il computer ha scelto ${computerConversion}`;
        document.getElementById("result").style.backgroundImage = "url(./img/pari.png)";

    } else if (!isNaN(chioceElement)) {
    
        document.getElementById("correct3").style.display = 'none';
        document.getElementById("wrong3").style.display = 'block';
        document.getElementById("message3").innerHTML = 'Non hai inserito un elemento valido Premi F5 per ricaricare la pagina';
    
    } else {
        if(chioceElement == "carta") {

            if(computerConversion == "sasso") {
                vittoria = true;
            } else {
                vittoria = false;
            }
        
        } else if(chioceElement == "sasso") {
            if(computerConversion == "forbice") {
                vittoria = true;
            } else {
                vittoria = false;
            }
        } else {
            if(computerConversion == "carta") {
                vittoria = true;
            } else {
                vittoria = false;
            }
        }

        document.getElementById("title").innerHTML = `Hai scelto ${chioceElement}, il computer ha scelto ${computerConversion}`;
        if(vittoria) {
            
            document.getElementById("result").style.backgroundImage = "url(./img/vittoria.png)";
        
        } else {
            
            document.getElementById("result").style.backgroundImage = "url(./img/perso.png)";
            
        }
    }

}

document.getElementById("btn1").addEventListener('click', temperature);
document.getElementById("btn2").addEventListener('click', averagemedia);
document.getElementById("btn3").addEventListener('click', rockPaperScissors);
