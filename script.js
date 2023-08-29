//Eleccion del usuario empleada en funcion de juego
let eleccionUsuario;
//Nombre del usuario empleado para personalizar mensajes
let usuario;
//Variable donde se lleva el conteo de puntos del Usuario
let puntosUsuario = 0;
//Variable donde se lleva el conteo de puntos de la Computadora
let puntosComputadora = 0; 

//Paso a variable todos los elementos con el metodo querySelector para que al necesitar usarlos, sea mas facil llamarlos.
const nombreUsuario = document.querySelector("#nombreUsuario");

const inicio = document.querySelector(".inicio");

const mensajeBienvenida = document.querySelector(".mensajeBienvenida");

const personalizado = document.querySelector("#personalizado");

const nuevoJuego = document.querySelector("#nuevoJuego");

const botonera = document.querySelector(".botonera");

const piedra = document.getElementById("piedra");
piedra.addEventListener("click", () => enJuego("piedra"));

const papel = document.getElementById("papel");
papel.addEventListener("click", () => enJuego("papel"));

const tijera = document.getElementById("tijera");
tijera.addEventListener("click", () => enJuego("tijera"));

const info = document.querySelector(".info");

const jugadaUsuario = document.querySelector("#jugadaUsuario");

const jugadaComputadora = document.querySelector("#jugadaComputadora");

const ganador = document.querySelector("#ganador");

const contadorUsuario = document.querySelector("#contadorUsuario");


const contadorComputadora = document.querySelector("#contadorComputadora");

const resultadoFinal = document.querySelector(".resultadoFinal");

const ganadorFinal = document.querySelector("#ganadorFinal");

//Funcion para conseguir nombre del jugador
function traerNombre(id) {
    
    if ((document.querySelector(id).value) === ``) {
        alert("ERROR: Tenes que ingresar tu nombre");
        return;
    }
    else {
        let nombre = document.querySelector(id).value
        return nombre;
    }
    
}

//Funcion, con un randomizador, para obtener la jugada de la Computadora
function obtenerJugadaComputadora() {
    let opciones = ["piedra", "papel", "tijera"];
    let jugada = opciones[(Math.floor(Math.random() * 3))];
    return jugada;
}

//Funcion que determina, entre dos jugadas el ganador
function determinarGanador(jugada1, jugada2) {
    if (jugada1 == jugada2) {
        return "Empate";
    }
    else if ((jugada1 == "piedra" && jugada2 == "tijera") ||
        (jugada1 == "papel" && jugada2 == "piedra") ||
        (jugada1 == "tijera" && jugada2 == "papel")) {
        return "Usuario";
    }
    else {
        return "Computadora";
    }
}

//Funcion donde se especifican las acciones de cada turno jugado
function jugarTurno(eleccionUsuario) {

    mensajeBienvenida.style.display = "none";
    nuevoJuego.style.display = "none";

    jugadaUsuario.innerText = `${usuario} eligio: ${eleccionUsuario}`;

    let eleccionComputadora = obtenerJugadaComputadora();
    jugadaComputadora.innerText = `La Computadora eligio: ${eleccionComputadora}`;

    let resultado = determinarGanador(eleccionUsuario, eleccionComputadora);

    if (resultado === "Empate") {
        ganador.innerText = "Empate...";
    }
    else if (resultado === "Usuario") {
        ganador.innerText = `Un punto para ${usuario}!!!`;
        puntosUsuario += 1;       
    }
    else {
        ganador.innerText = "Un punto para la Computadora!!!";
        puntosComputadora += 1;        
    }

    contadorUsuario.innerText = `Puntos de ${usuario}: ${puntosUsuario}`;
    contadorComputadora.innerText = `Puntos de la Computadora: ${puntosComputadora}`;

}

//Funcion que pone a correr el  cada turno del juego hasta que alguien gane (accionada por los botones de P/P/T)
function enJuego(jugadaElegida) {

    if (puntosUsuario < 5 && puntosComputadora < 5) {
        jugarTurno(jugadaElegida);
    }
    if (puntosUsuario === 5 ||
        puntosComputadora === 5 ||
        (Math.abs(puntosUsuario - puntosComputadora)) === 3) {

        botonera.style.display = "none";
        info.style.display = "none";

        resultadoFinal.style.display = "flex";

        if (puntosUsuario > puntosComputadora) {
            ganadorFinal.innerText = "GANASTE";
        }
        else {
            ganadorFinal.innerText = "PERDISTE";
        }
    }
}
//Funcion que restablece los valores a 0 para jugar de nuevo 8conservando el nombre
function resetear(){
    puntosUsuario = 0;
    puntosComputadora = 0;
    jugadaUsuario.innerText = ``;
    jugadaComputadora.innerText = ``;
    ganador.innerText = ``;
    contadorUsuario.innerText = ``;
    contadorComputadora.innerText = ``;
    resultadoFinal.style.display = "none";
    nuevoJuego.style.display = "block";
    botonera.style.display = "block";
    info.style.display = "block";
};

//Al accionar el boton inicial, se determina el nombre de usuario, el boton se esconde y se muestra  el mensaje de bienvenida y la botonera.
go.addEventListener("click", () => {
    usuario = traerNombre("#nombreUsuario");  
    if(usuario !== undefined){
        personalizado.innerText = `Bienvenid@ ${usuario}!!!`;
        mensajeBienvenida.style.display = "flex";
        botonera.style.display = "block";
        inicio.style.display = "none"; 
    }    
});
//Al accionar el boton se comienza una nueva partida de 0
reset.addEventListener("click", () => {
    resetear();
});