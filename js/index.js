const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const button = form.querySelector("button");

const widthScreen = () => {
  const w = window;
  const d = document;
  const ee = d.documentElement;
  const g = d.getElementsByTagName("body")[0];
  const x = w.innerWidth || ee.clientWidth || g.clientWidth;
  return x;
};

const handlerSubmit = e => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].required = "false";
    inputs[i].style.borderColor = "";
    if (inputs[i].value === "") {
      if (
        widthScreen() >= "850" &&
        inputs[i].placeholder.indexOf("Вы забыли ввести свои данные!") === -1
      ) {
        inputs[i].placeholder = `${inputs[i].placeholder}:
        Вы забыли ввести свои данные!`;
      }
      inputs[i].required = "true";
      inputs[i].style.borderColor = "red";
      e.preventDefault();
    }
  }
};

button.addEventListener("click", e => {
  handlerSubmit(e);
});
