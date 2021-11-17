import CodeBreaker from "./codebreaker";

describe("codebreaker", () => {
    it("Gana si es el mismo numero", () => {
        const cb = new CodeBreaker('3157')
        cb.adivinar('3157')
        expect(cb.ganoElJuego()).toEqual(true)
    })
    it("Gana si es el mismo numero", () => {
        const cb = new CodeBreaker('1234')
        cb.adivinar('3157')
        expect(cb.ganoElJuego()).toEqual(false)

    })
    it("No hay pistas si no coinciden", () => {
        const cb = new CodeBreaker('1234')
        cb.adivinar('5678')
        expect(cb.obtenerPistas()).toEqual('No hay pistas')
    })
    // it("Si 1nro está fuera de su posición devuelve *", () => {
    //     const cb = new CodeBreaker('1234')
    //     cb.adivinar('2678')
    //     expect(cb.obtenerPistas()).toEqual('* - - -')
    // })
    it("Si 1nro está en posición correcta devuelve !", () => {
        const cb = new CodeBreaker('1234')
        cb.adivinar('1678')
        expect(cb.obtenerPistas()).toContain('!')
    })
    it("Si 2do nro está en posición correcta devuelve !", () => {
        const cb = new CodeBreaker('1234')
        cb.adivinar('0278')
        expect(cb.obtenerPistas()).toContain('!')
    })
    it("Dos numero exactos", () => {
        const cb = new CodeBreaker('1234')
        cb.adivinar('7834')
        expect(cb.obtenerPistas()).toEqual('!!')
    })

})