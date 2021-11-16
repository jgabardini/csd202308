import CodeBreaker from "./codebreaker";

const form = document.querySelector("#codigo-form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const codigo = document.querySelector("#codigo").value;
  const numero = document.querySelector("#numero").value;
  const pistas = document.querySelector("#pistas");
  const codebreaker = new CodeBreaker(codigo)
  codebreaker.adivinar(numero)

  if (codebreaker.ganoElJuego()) {
    resultado.innerHTML = "Ganó";
    pistas.innerHTML = '';
  }
  else {
    resultado.innerHTML = "";
    pistas.innerHTML = codebreaker.obtenerPistas();
  }

});
