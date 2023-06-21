window.onload = function () {
    var segundos = 00;
    var milisegundo = 00;
    var appendSeconds = document.getElementById('seg');
    var appendMiliseconds = document.getElementById('mseg');
    var intervalo;
    var buttonStart = document.getElementById('button-Start');
    var buttonStop = document.getElementById('button-Stop');
    var buttonReset = document.getElementById('button-Reset');

    buttonStart.onclick = function(){
        clearInterval(intervalo);
        intervalo = setInterval(startTimer,10);
    }

    buttonStop.onclick = function(){
        clearInterval(intervalo);
    }

    buttonReset.onclick = function(){
        clearInterval(intervalo);
        milisegundo = '00';
        segundos = '00';
        appendMiliseconds.innerHTML = milisegundo;
        appendSeconds.innerHTML = segundos
    }

    function startTimer(){
        milisegundo++

        if(milisegundo <=9){
            appendMiliseconds.innerHTML = '0' + milisegundo;        
        }

        if(milisegundo > 9){
            appendMiliseconds.innerHTML = milisegundo;
        }

        if(milisegundo > 99){
            console.log('segundos');
            segundos++;
            appendSeconds.innerHTML = '0' + segundos;
            milisegundo = 0;
            appendMiliseconds.innerHTML = '0' + 0;
        }
        if(segundos > 9){
            appendSeconds.innerHTML = segundos;
        }
    }
}