import Kbot from "./kbot";

describe("Kbot", () => {
  it("saludar en español al inicio", () => {
    const kbot = new Kbot('es');
    expect(kbot.responder('')).toEqual("Hola, soy Kbot. ¿Cómo te llamas?");
  });
  it("Saluda al nombre de la persona", ()=> {
    const kbot = new Kbot('es', 8);
    kbot.responder('')
    expect(kbot.responder('Pedro')).toMatch(/Pedro/);
  });
  it("Saluda segun el momento del día - a la mañana", ()=> {
    const kbot = new Kbot('es', 8);
    kbot.responder('')
    expect(kbot.responder('')).toMatch(/Buenos días/);
  });
  it("Saluda segun el momento del día - a la mañana", ()=> {
    const kbot = new Kbot('en',11);
    kbot.responder('')
    expect(kbot.responder('')).toMatch(/Good morning/);
  });
  it("Devuelve la consulta realizada", ()=> {
    const kbot = new Kbot('es',11);
    kbot.responder('')
    kbot.responder("")
    expect(kbot.responder("Cómo estás?")).toMatch(/Recibimos tu consulta \"Cómo estás\?\"/);

  });

});
