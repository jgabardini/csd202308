module.exports = class Kbot {
  constructor(leng = 'es', hora = (new Date()).getHours()) {
    this.leng = leng;
    this.estado =  0
    this.hora = hora
  }

  mensajeSegunMomento() {
    if (this.hora >= 5 && this.hora < 12) {
      return {'es':'Buenos días', 'en':'Good morning'}[this.leng];
    } else if (this.hora >= 12 && this.hora < 18) {
      return {'es':'Buenas tardes', 'en':'Good afternoon'}[this.leng];
    } else {
      return {'es':'Buenos noches', 'en':'Good evening'}[this.leng];
    }
  }
  responder(consulta) {
    const MENSAJES = {
      'es': [
        'Hola, soy Kbot. ¿Cómo te llamas?',
        '[bienvenida], [consulta]. ¿Cómo puedo ayudarte?',
        'Recibimos tu consulta "[consulta]" y la responderemos a la brevedad'
      ],
      'en': [
        'Hi, I\'m Kbot. What\'s your name?',
        '[bienvenida], [consulta]. How can I help you?',
        'This is your question "[consulta]" we\'ll get back soon'
      ],
    }
    const respuesta = MENSAJES[this.leng][this.estado
    ].replace('[consulta]', consulta).replace('[bienvenida]', this.mensajeSegunMomento());
    this.estado +=1
    return respuesta
  }
}

// export default Kbot;