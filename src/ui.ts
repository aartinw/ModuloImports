import { getPuntuacion, setPuntuacion, setEstadoJuego } from "./model";

export const actualizarPuntuacion = () => {
  const nuevosPuntos = document.getElementById("puntuacionActual");
  if (nuevosPuntos) {
    nuevosPuntos.textContent = `Puntuacion: ${getPuntuacion()}`;
  }
};

export const mostrarUrlCarta = (urlCarta: string) => {
  const elementoImagen = document.getElementById("imagenCarta");

  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    elementoImagen.src = urlCarta;
  }
};
export const mostrarMensaje = (mensaje: string) => {
  const mensajeElemento = document.getElementById("mensajeFinal");
  if (mensajeElemento) {
    mensajeElemento.textContent = mensaje;
  }
};
export const desactivarBotones = () => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  )
    botonDameCarta.disabled = true;
  const botonMePlanto = document.getElementById("mePlanto");
  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  )
    botonMePlanto.disabled = true;
};

export const activarBotones = () => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  )
    botonDameCarta.disabled = false;

  const botonMePlanto = document.getElementById("mePlanto");
  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  )
    botonMePlanto.disabled = false;
};

export const mostrarBotonReiniciar = (reiniciarTodo: () => void) => {
  const reiniciarContainer = document.getElementById("nuevaPartida");
  if (reiniciarContainer && !document.getElementById("reiniciar")) {
    const botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "Nueva Partida";
    botonReiniciar.id = "reiniciar";
    botonReiniciar.addEventListener("click", () => {
      setPuntuacion(0);
      setEstadoJuego(false);
      reiniciarTodo();
    });
    reiniciarContainer.appendChild(botonReiniciar);
  }
};

export const resetJuego = () => {
  const elementoImagen = document.getElementById("imagenCarta");
  if (elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = "imgs/back.jpg";
  }

  const reiniciarContainer = document.getElementById("nuevaPartida");
  if (reiniciarContainer) {
    reiniciarContainer.innerHTML = "";
  }
  actualizarPuntuacion();
  mostrarMensaje("");
  activarBotones();
};
