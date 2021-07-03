const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const button = document.getElementById("btnEmpezar");
const ultimoNivel = 10;

class Juego {
  constructor() {
    this.inicializar();
  }

  inicializar() {
    button.classList.add("hide");
  }
}

function empezarJuego() {
  var juego = new Juego();
}
