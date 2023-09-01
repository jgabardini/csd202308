import CodeBreaker from "./codebreaker";

describe("codebreaker UI", () => {
  it("Crea con clave fija", () => {
    const codebreaker = new CodeBreaker('01')
    expect(codebreaker.obtenerPistas()).toEqual('- -')
    });
  
});  