import runEventListeners from "./event_listener.js";
import { generateHtml } from "./generate.js";

runEventListeners();
generateHtml();

document.querySelectorAll(".js-comprar-button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset.id);
  });
});
