import fs from "fs";

describe("codebreaker UI", () => {

  beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
      require("../cb/presenter");
  })

  it("Saludo", () => {
    expect(document.querySelector("title").innerHTML ).toEqual('¡Bienvenidos al Codebreaker!')
    expect(document.querySelector("h1").innerHTML ).toEqual('¡Bienvenidos al Codebreaker!')
  });
  it('Ganó', () => {
    codigo('3158')
    adivinar('3158')
    expect(resultado() ).toEqual('Ganó')
  })
 
  function codigo(nro) {
      document.querySelector("#codigo").value = nro
  }
  function adivinar(nro) {
      document.querySelector("#numero").value = nro;
      document.querySelector("input[type=submit]").click();
  }
  function resultado() {
      return document.querySelector("#resultado").innerHTML
  }
});
