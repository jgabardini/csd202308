import Kbot from "./kbot";

const consulta = document.querySelector("#consulta");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const kbot = new Kbot('es')

div.innerHTML = "<p>" + kbot.responder('') + "</p>";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML += "<p>" + kbot.responder(consulta.value) + "</p>";
  consulta.value = ''
});
