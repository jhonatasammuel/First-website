const changeAppereance = () => {
  const button = document.querySelector(".js-mode-button");
  const option = button.innerHTML;

  if (option === "Modo Escuro") {
    const paragraphs = document.querySelectorAll(".paragraph");
    paragraphs.forEach((value) => {
      value.classList.add("js-paragraph-style");
    });
    document.querySelector("fieldset").classList.add("js-paragraph-style");
    document.querySelector("html").classList.add("js-body-background");
    document.querySelector(".theme").classList.add("js-theme");

    button.innerHTML = "Modo Claro";
  } else {
    const paragraphs = document.querySelectorAll(".paragraph");
    paragraphs.forEach((value) => {
      value.classList.remove("js-paragraph-style");
    });
    document.querySelector("fieldset").classList.remove("js-paragraph-style");
    document.querySelector("html").classList.remove("js-body-background");
    document.querySelector(".theme").classList.remove("js-theme");
    button.innerHTML = "Modo Escuro";
  }
};

const clearFields = () => {
  document.querySelectorAll(".js-clear-field").forEach((field) => {
    field.value = "";
  });
};

export { changeAppereance, clearFields };
