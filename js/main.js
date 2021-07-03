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
    this.siguienteNivel();
  }

  inicializar() {
    // inicializacion del metodo o funcion que inicia el juego
    button.classList.add("hide"); // escondel el boton
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    };
  }
  generarSecuencia() {
    //inicializacion del metodo o funcion que define la secuencia
    this.secuencia = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
  siguienteNivel() {
    this.iluminarSecuencia();
    this.agregarEventosClick();
  }
  transformarNumeroAColor(numero) {
    switch (numero) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      let color = this.transformarNumeroAColor(this.secuencia[i]);
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  }
  iluminarColor(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => this.apagarColor(color), 350);
  }
  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }
  agregarEventosClick() {
    this.colores.celeste.addEventListener("click", this.elegirColor.bind(this));
    this.colores.verde.addEventListener("click", this.elegirColor.bind(this));
    this.colores.violeta.addEventListener("click", this.elegirColor.bind(this));
    this.colores.naranja.addEventListener("click", this.elegirColor.bind(this));
  }
  elegirColor(event) {
    console.log(event);
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
