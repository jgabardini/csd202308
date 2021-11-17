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
        
        this.pista = ''

        for(let i=0; i<4; i++) {
            if (this.codigo[i] == numero[i]) {
                this.pista += '!'
            }
        }
        if (this.pista == '') {
            this.pista = 'No hay pistas'
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