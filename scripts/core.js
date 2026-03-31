import runEventListeners from "./event_listener.js";
import { generateHtml, cart, generateHtmlCart } from "./generate.js";

runEventListeners();
generateHtml();
generateHtmlCart();

document.querySelectorAll(".js-comprar-button").forEach((button) => {
  button.addEventListener("click", () => {
    cart.addProduct(button.dataset.id);
    generateHtmlCart();
  });
});

document.querySelectorAll(".js-remover-button").forEach((button) => {
  button.addEventListener("click", () => {
    cart.removeProduct(button.dataset.id);
    generateHtmlCart();
  });
});
