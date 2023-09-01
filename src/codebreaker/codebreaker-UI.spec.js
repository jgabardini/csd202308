import fs from "fs";

describe("codebreaker UI", () => {
// muestre Bienvenida a Codebreaker

  it("Bienvenida a Codebreaker", () => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    expect(document.querySelector("title").innerHTML ).toEqual('¡Bienvenid@ al Codebreaker!')
    expect(document.querySelector("h1").innerHTML ).toEqual('¡Bienvenid@ al Codebreaker!')
  });

  it("Genera una clave", () => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter");
    
    expect(document.querySelector("#resultado").innerHTML ).toEqual('- -')
  });

});
