//Eleccion del usuario empleada en funcion de juego
var eleccionUsuario;


const inicio = document.querySelector(".inicio");

const mensajeBienvenida = document.querySelector(".mensajeBienvenida");

//Paso a variable todos los elementos del "<div>:botonera", con el metodo querySelector,
//para que al necesitar usarlos, sea mas facil llamarlos.
const botonera = document.querySelector(".botonera");

const piedra = document.getElementById("piedra");
piedra.addEventListener("click", () => enJuego("piedra"));


const papel = document.getElementById("papel");
papel.addEventListener("click", () => enJuego("papel"));


const tijera = document.getElementById("tijera");
tijera.addEventListener("click", () => enJuego("tijera"));


//Paso a variable todos los elementos del "<div>:info", con el metodo querySelector,
//para que al necesitar usarlos, sea mas facil llamarlos.
const info = document.querySelector(".info");

const jugadaUsuario = document.querySelector("#jugadaUsuario");

const jugadaComputadora = document.querySelector("#jugadaComputadora");

const ganador = document.querySelector("#ganador");

const contadorUsuario = document.querySelector("#contadorUsuario");
let puntosUsuario = 0; //Variable donde se lleva el conteo de puntos del Usuario

const contadorComputadora = document.querySelector("#contadorComputadora");
let puntosComputadora = 0; //Variable donde se lleva el conteo de puntos de la Computadora

//Paso a variable todos los elementos del "<div>:resultadoFinal", con el metodo querySelector,
//para que al necesitar usarlos, sea mas facil llamarlos.
const resultadoFinal = document.querySelector(".resultadoFinal");

const ganadorFinal = document.querySelector("#ganadorFinal");

//Funcion, con un randomizador, para obtener la jugada de la Computadora
function obtenerJugadaComputadora() {
    let opciones=["piedra", "papel", "tijera"];
    let jugada = opciones[(Math.floor(Math.random() * 3))];
    return jugada;    
}

//Funcion que determina, entre dos jugadas el ganador
function determinarGanador(jugada1, jugada2) {
    if (jugada1 == jugada2){
        return "Empate";              
    } 
    else if ((jugada1 ==  "piedra" && jugada2 == "tijera")||
             (jugada1 == "papel" && jugada2 == "piedra")||
             (jugada1 == "tijera" && jugada2 == "papel")){            
            return "Usuario";
    } 
    else {
        return "Computadora";
    } 
}

//Funcion donde se especifican las acciones de cada turno jugado
function jugarTurno(eleccionUsuario){
    
    mensajeBienvenida.style.display="none";
    
    jugadaUsuario.innerText = `El usuario eligio: ${eleccionUsuario}`;
 
    let eleccionComputadora = obtenerJugadaComputadora();
    jugadaComputadora.innerText =`La Computadora eligio: ${eleccionComputadora}`;

    let resultado = determinarGanador(eleccionUsuario, eleccionComputadora);

    if (resultado === "Empate") {
       ganador.innerText = "Empate!";
       contadorUsuario.innerText = `Puntos Usuario: ${puntosUsuario}`;
       contadorComputadora.innerText = `Puntos Computadora: ${puntosComputadora}`; 
       
    }
    else if  (resultado === "Usuario"){
        ganador.innerText = "Un punto para el Usuario!";
        puntosUsuario += 1 ;
        contadorUsuario.innerText = `Puntos Usuario: ${puntosUsuario}`;
        contadorComputadora.innerText = `Puntos Computadora: ${puntosComputadora}`;
    }
    else {
        ganador.innerText = "Un punto para la Computadora!";
        puntosComputadora += 1 ;
        contadorUsuario.innerText = `Puntos Usuario: ${puntosUsuario}`;
        contadorComputadora.innerText = `Puntos Computadora: ${puntosComputadora}`; 
    }
  
}

//Funcion, que al ser llamada por la accion de uno de los botones de seleccion de jugada, pone a correr el juego, llamando 
//la funcion de accion por turnos
function enJuego (jugadaElegida) {
      
    if (puntosUsuario < 5 && puntosComputadora < 5 ){
       jugarTurno(jugadaElegida);}
    if (puntosUsuario === 5 ||
        puntosComputadora === 5 ||
        (Math.abs(puntosUsuario - puntosComputadora)) === 3){       
       
       botonera.style.display = "none";
       info.style.display="none";
      
       resultadoFinal.style.display="flex";
 
       if (puntosUsuario > puntosComputadora){
          ganadorFinal.innerText = "GANASTE";
       }
       else {
         ganadorFinal.innerText = "PERDISTE";
       }
    }   
}

//Al accionar el boton inicial, este se esconde y se muestra la botonera.
go.addEventListener("click", () => {
    mensajeBienvenida.style.display="flex";
    botonera.style.display="block";   
    inicio.style.display = "none";   
 });

