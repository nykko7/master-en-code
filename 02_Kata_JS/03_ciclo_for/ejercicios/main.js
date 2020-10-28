//------------------> Challenge <-----------------------

// incio limite secuencia
//   10  | 1000   |  250
//   0   | -500   |  -10
//  1000 | 0      |  -50
console.error('Challenge 1');
console.warn('Ejercicio 1: 10  | 1000  |  250');
for (let i = 10; i <= 1000; i += 250) {
	console.log(i);
}

console.warn('Ejercicio 2: 0   | -500   |  -10');
for (let i = 0; i >= -500; i -= 10) {
	console.log(i);
}

console.warn('Ejercicio 3: 1000 | 0      |  -50');
for (let i = 1000; i >= 0; i -= 50) {
	console.log(i);
}

console.error('Challenge 2');
console.warn('Ejercicio 1: Recorrer de 1 -> 100:');
console.warn("Si el numero es divisible entre 3 --> numero + 'fizz'");
console.warn("Si el numero es divisible entre 5 --> numero + 'buzz'");
console.warn("Si el numero es divisible entre 3 y 5 --> numero + 'fizzbuzz's");

for (var i = 1; i <= 100; i++) {
	var mensaje = i.toString();
	if (i % 15 === 0) {
		mensaje += ' fizzbuzz';
	} else if (i % 3 === 0) {
		mensaje += ' fizz';
	} else if (i % 5 === 0) {
		mensaje += ' buzz';
	}
	console.log(mensaje);
}
