import CodeBreaker from "/src/codebreaker/codebreaker";

const resultado = document.querySelector("#resultado");

const codebreaker = new CodeBreaker('01')
resultado.innerHTML = codebreaker.obtenerPistas();