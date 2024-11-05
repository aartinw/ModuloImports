import {
  getPuntuacion,
  setPuntuacion,
  estadoJuego,
  setEstadoJuego,
  generarNumeroAleatorio,
  generarNumeroCarta,
  obtenerUrlCarta,
  obtenerPuntosCarta,
  reiniciarJuego,
} from "./model";

import {
  actualizarPuntuacion,
  mostrarMensaje,
  mostrarUrlCarta,
  desactivarBotones,
  activarBotones,
  resetJuego,
  mostrarBotonReiniciar,
} from "./ui";

export const terminarJuego = () => {
  setEstadoJuego(true);
  desactivarBotones();
};

export const reiniciarPartida = () => {
  reiniciarJuego();
  resetJuego();
  actualizarPuntuacion();
  activarBotones();
};
export const gestionarPartida = () => {
  const puntuacionActual = getPuntuacion();

  if (puntuacionActual === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    mostrarBotonReiniciar(reiniciarPartida);
    terminarJuego();
  } else if (puntuacionActual > 7.5) {
    mostrarMensaje("¡Game Over! Has perdido.");
    mostrarBotonReiniciar(reiniciarPartida);
    terminarJuego();
  }
};

export const plantarsePartida = () => {
  if (estadoJuego()) return;

  setEstadoJuego(true);
  desactivarBotones();

  const puntuacionActual = getPuntuacion();
  if (puntuacionActual < 4) {
    mostrarMensaje("Has sido muy conservador");
  } else if (puntuacionActual === 5) {
    mostrarMensaje("Te ha entrado el canguelo eh?");
  } else if (puntuacionActual >= 6 && puntuacionActual < 7.5) {
    mostrarMensaje("Casi casi...");
  } else if (puntuacionActual === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
  }
  mostrarBotonReiniciar(reiniciarPartida);
};

export const dameCarta = () => {
  if (estadoJuego()) return;

  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(carta);
  mostrarUrlCarta(urlCarta);

  const puntosCarta = obtenerPuntosCarta(carta);
  setPuntuacion(getPuntuacion() + puntosCarta);

  actualizarPuntuacion();
  gestionarPartida();
};
