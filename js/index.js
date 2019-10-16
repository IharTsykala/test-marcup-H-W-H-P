const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const button = form.querySelector("button");

const handlerSubmit = e => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].required = "false";
    inputs[i].style.borderColor = "";
    if (inputs[i].value === "") {
      inputs[i].placeholder = "Вы забыли ввести свои данные!";
      inputs[i].required = "true";
      inputs[i].style.borderColor = "red";
      e.preventDefault();
    }
  }
};

button.addEventListener("click", e => {
  handlerSubmit(e);
});
