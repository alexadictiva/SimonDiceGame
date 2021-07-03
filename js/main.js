const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const button = document.getElementById("btnEmpezar");
const ultimoNivel = 10;

class Juego {
  constructor() {
    this.inicializar(); // declaramos la funcion que inicia el juego
    this.generarSecuencia(); //declaramos function que genera la secuencia de nuero que va a indica que color se va a encender.
  }

  inicializar() {
    // inicializacion del metodo o funcion que inicia el juego
    button.classList.add("hide"); // escondel el boton
  }
  generarSecuencia() {
    //inicializacion del metodo o funcion que define la secuencia
    this.secuencia = new Array(ultimoNivel)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
