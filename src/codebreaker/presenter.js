import CodeBreaker from "./codebreaker";

const resultado = document.querySelector("#resultado");

const codebreaker = new CodeBreaker('01')
resultado.innerHTML = codebreaker.obtenerPistas();