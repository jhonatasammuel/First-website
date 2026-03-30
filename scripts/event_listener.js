import { changeAppereance, clearFields } from "./functions.js";

export default function runEventListeners() {
  const modeButton = document.querySelector(".js-mode-button");
  const enviarButton = document.querySelector(".js-enviar-button");

  modeButton.addEventListener("click", changeAppereance);
  enviarButton.addEventListener("click", clearFields);
}
