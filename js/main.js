const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const button = document.getElementById("btnEmpezar");
const ultimoNivel = 10;

class Juego {
  constructor() {
    //parametros
    this.inicializar();
    this.generarSecuencia();
    setTimeout(() => {
      this.siguienteNivel();
    }, 1000);
  }

  //metodos
  inicializar() {
    // this.siguienteNivel = this.siguienteNivel.bind(this)
    // this.elegirColor = this.elegirColor.bind(this);
    this.toggleButton();
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    };
  }
  toggleButton() {
    if (button.classList.contains("hide")) {
      button.classList.remove("hide");
    } else {
      button.classList.add("hide");
    }
  }
  generarSecuencia() {
    //para crear un array random
    this.secuencia = new Array(ultimoNivel)
      .fill(0)
      .map((numero) => Math.floor(Math.random() * 4));
  }
  siguienteNivel() {
    this.subnivel = 0;
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
  transformarColorANumero(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
    }
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i]);
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
  eliminarEventosClick() {
    this.colores.celeste.removeEventListener("click", this.elegirColor);
    this.colores.verde.removeEventListener("click", this.elegirColor);
    this.colores.violeta.removeEventListener("click", this.elegirColor);
    this.colores.naranja.removeEventListener("click", this.elegirColor);
  }
  elegirColor(evento) {
    const nombreColor = evento.target.dataset.color;
    const numeroColor = this.transformarColorANumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.eliminarEventosClick();
        if (this.nivel === ultimoNivel + 1) {
          //this.ganoJuego;

          swal("Usuario", "Felicidades, ganaste", "success").then(
            this.inicializar.bind(this) // cuando no se sale quien es this se puede buscar con un console.log(this) dentro de la funcion que lo llama
          );
        } else {
          setTimeout(this.siguienteNivel.bind(this), 1500);
        }
      }
    } else {
      //alert("perdió");
      swal("Usuario", "Uy, perdiste", "error").then(() => {
        this.eliminarEventosClick();
        this.inicializar();
      });
    }
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
