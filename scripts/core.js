import runEventListeners from "./event_listener.js";
import { generateHtml, cart } from "./generate.js";

runEventListeners();
generateHtml();

document.querySelectorAll(".js-comprar-button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log(cart);
    cart.addProduct(button.dataset.id);
  });
});

document.querySelectorAll(".js-remover-button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log(cart);
    cart.removeProduct(button.dataset.id);
  });
});
