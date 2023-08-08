const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

const volta = new Date(2025, 8, 23); 

function countdown() {
    const currentDate = new Date();

    const totalMilliseconds = volta - currentDate;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);

    const dias = Math.floor(totalSeconds / 3600 / 24);
    const horas = Math.floor((totalSeconds / 3600) % 24);
    const minutos = Math.floor((totalSeconds / 60) % 60);
    const segundos = Math.floor(totalSeconds % 60);

    diasElement.innerHTML = dias;
    horasElement.innerHTML = formatTime(horas);
    minutosElement.innerHTML = formatTime(minutos);
    segundosElement.innerHTML = formatTime(segundos);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
