//Creo variables para los botones de inicio y reinicio.
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//Creo variables para el tiempo
let seconds = 0;
let minutes = 0;
let hours = 0;

//Creo varibles para los 0 izquierdos
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Creo variables paa el estado del timepo y el intervalo de tiempo.
let timerInterval = null;
let timerStatus = "Stopped";

//funcion del cronometro
function stopWatch() {
  //Sumamos los segundos
  seconds++;

  //Establecemos las condicionales, en caso de que los segundos lleguen a 60, se tranformen en 0, el mismo caso aplica para los minutos.
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  //Aqui establecemos si los segundos es menos a 10, se agregue un 0 a la izquierda para evitar que se vea esteticamente solo 1 digito, el mismo caso aplica para los minutos y horas.
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  //Mostramos los minutos, segundos y horas.
  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

//Aniadimos al boton de inicio un evento
startStopBtn.addEventListener("click", () => {
  //Verificamos si el estado del tiempo esta parado para poder inciar el cronometro
  if (timerStatus === "stopped") {
    //Establecemos el intervalo de tiempo a que se sume 1 segundo en la vida real.
    timerInterval = window.setInterval(stopWatch, 1000);
    //Creamos el boton de pausa y lo reemplazamos por el de inicio
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class = "fa-solid fa-pause" id = "pause"></i>`;
    //Ponemos que el estado del cronometro se inicio
    timerStatus = "started";
    //Caso contrario se paraliza, previamente evaluado si ya esta iniciado
  } else {
    //Paramos el tiempo
    window.clearInterval(timerInterval);
    //Reemplazamos el boton de pausa por el de inicio
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`;
    //Establecemos que el estado del cronometo esta en pausa
    timerStatus = "stopped";
  }
});

//Creamos el evento del boton de reinicio, iniciando todas las variables en 0 y el cronometro se mostrara en 00:00:00
resetBtn.addEventListener("click", () => {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
});
