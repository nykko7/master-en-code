var numero = 10;

if (numero !== 10) {
	console.log('Es True.');
} else {
	console.log('Es False.');
}

// En una linea:
// if (numero === 10) console.log('Es True.');
// else console.log('Es False');

//CHALLENGE 1:
// van a preguntar al usuario un numero y van a poner en la consola
// el numero y si es par o impar
// 1: impar
// 2: par

var numero = prompt('Ingrese un Número');
numero = Number(numero);

if (numero % 2 === 0) console.log(numero + ' es: par.');
else if (numero % 2 === 1) console.log(numero + ' es: impar.');
else console.error('Debes ingresar un Número.');

//CHALLENGE 2:
// Juego de piedra papel o tijera :emoji
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano

var eleccion = prompt('Juego Piedra, papel o tijeras. Escriba jugada: ');
var eleccionLower = lower.toLowerCase();

console.log('Jugador 1 jugó ' + eleccionLower + '.');
var jugadaPC = Math.floor(Math.random() * 3) + 1;
if ((jugadaPC = 1)) {
}
