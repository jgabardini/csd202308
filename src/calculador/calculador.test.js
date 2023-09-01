
// “1+2”=3
// “4+2”=6 
// “3+8+7”=18
// admite nuevas líneas: “\n”  Ejemplo: “1+2+4\n+5+6”=18
// Ejemplo: “3+6-4”=5
// Ejemplo: “31+3\n+6-4”=36


import calculador from "./calculator";

describe("Calculador", () => {
  it('String vacio “”=0 ', () =>{
    expect(calculador('') ).toEqual(0)
  });
  it(' “5”=5  ', () =>{
    expect(calculador('5') ).toEqual(5)
  });
  it(' “4+2”=6  ', () =>{
    expect(calculador('4+2') ).toEqual(6)
  });
  it(' “3+8+7”=18  ', () =>{
    expect(calculador('3+8+7') ).toEqual(18)
  });
});
