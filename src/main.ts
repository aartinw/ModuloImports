import { dameCarta, plantarsePartida } from "./motor";
import { resetJuego } from "./ui";

document.getElementById("dameCarta")?.addEventListener("click", dameCarta);
document
  .getElementById("mePlanto")
  ?.addEventListener("click", plantarsePartida);

resetJuego();
