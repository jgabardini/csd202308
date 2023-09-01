import Kbot from "./kbot";

describe("Kbot", () => {
  describe("es", () => {
    var kbot;
    beforeEach(() => kbot = new Kbot('es', 11));
    it("Hola - es", () => {
      expect(kbot.responder('')).toMatch(/Hola/);
    });
    it("nombre - es", () => {
      kbot.responder('')
      expect(kbot.responder('Pedro')).toMatch(/Pedro/);
    });
    it("Buenos días - es", () => {
      kbot.responder('')
      expect(kbot.responder('')).toMatch(/Buenos días/);
    });
    it("te contactaremos - es", () => {
      kbot.responder('')
      kbot.responder('')
      expect(kbot.responder('hola')).toMatch(/Recibimos/);
    });
  });
  describe("en", () => {
    var kbot;
    beforeEach(() => kbot = new Kbot('en'));
    it("Hola - en", () => {
      expect(kbot .responder('')).toMatch(/Hi/);
    });
      
    it("te contactaremos - en", () => {
      kbot.responder('')
      kbot.responder('')
      expect(kbot.responder('hola')).toMatch(/soon/);
    });
  });
});
