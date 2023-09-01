const Kbot = require('./kbot')

let mensaje;

kbot = new Kbot();
mensaje = kbot.responder('')
console.log(mensaje)
if (mensaje == "Hola, soy Kbot. ¿Cómo te llamas?") {
  console.log("Esta bien!")
}

kbot = new Kbot('en');
mensaje = kbot.responder('')
if (mensaje =="Hi, I'm Kbot. What's your name?") {
  console.log("Esta bien!")
  console.log(mensaje)
}

kbot = new Kbot('es', 8);
kbot.responder('')
console.log(kbot.responder('Juan'))

kbot = new Kbot('es', 12);
kbot.responder('')
mensaje = kbot.responder('Juan')
if (mensaje =="Buenas tardes, Juan. ¿Cómo puedo ayudarte?") {
  console.log("Esta bien!")
} else {
  console.log(mensaje)
  console.log("Esta mal!")
}


// Buenos días, Juan. ¿Cómo puedo ayudarte?

