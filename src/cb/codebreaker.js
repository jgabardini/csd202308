class CodeBreaker {
    constructor(codigo) {
        if (codigo == '') {
            this.codigo = '1234'
        }
        else {
            this.codigo = codigo
        }
    }
    adivinar(numero) {
        this.gano = (this.codigo == numero)
        
        this.pista = '- - - -'

        if (this.codigo[0] == numero[0]) {
            this.pista = '! - - -'
        }
    }
    ganoElJuego() {
        return this.gano
    }
    obtenerPistas() {        

        return this.pista
    }
    
}

export default CodeBreaker;