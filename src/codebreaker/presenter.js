// import CodeBreaker from "./codebreaker";
class CodeBreaker{
  constructor(clave) {
    this.clave = clave
  }
  obtenerPistas() {
    return '- -'
  }
}

const resultado = document.querySelector("#resultado");

const codebreaker = new CodeBreaker('01')
resultado.innerHTML = codebreaker.obtenerPistas();