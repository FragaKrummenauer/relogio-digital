const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

time();
setInterval(time, 1000);


function time() {
    let data = new Date();

    horas.innerHTML = data.getHours();
    minutos.innerHTML = data.getMinutes();
    segundos.innerHTML = data.getSeconds();
}