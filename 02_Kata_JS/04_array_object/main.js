//Arrays o arreglos:
//
//Posicion:     0       1         2
var color = ['Azul', 'Verde', 'Naranja'];

console.log('Arreglo: ');
console.log(color);
console.warn('Referencias a elementos de arreglo:');
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);



// ----- Métodos -----
// .push()
// Agrega un elemento a la última posición.

console.warn('push()');
color.push('Negro');
color.push('Blanco');
color.push('Rosa');
console.log(color);


// .pop()
// Elimina el ultimo elemento del arreglo.

console.warn('pop()');
color.pop();
color.pop();
color.pop();
console.log(color);


// .slice(posInicio, posFinal?)
// Recorta un arreglo desde la posicion inicial (incluida) a la final (no incluida)

console.warn('.slice(posInicio, posFinal?)');
var colorSlice = color.slice(1,3);
console.log('Color: ' + color);
console.log('ColorSlice: ' + colorSlice);


// .splice(start, deleteCount?, item?)
//Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

console.warn('.slice(start, deleteCount?, item?)');
console.log('Color: ' + color);
color.splice(1, 0, 'Amarillo');
console.log('ColorSplice: ' + color);



// ----- Objetos o Objects -----

// var objeto = {}
var persona = {
  nombre: 'Ricardo',
  edad: 22,
  cel: '+569 65391690',
  musica: {
    banda: 'Banda MS',
    kpop: 'K-Pop',
    rock: 'Kiss',
    trap: {
      duki: 'Modo diablo',
    }
  },
  peliculas: ['RF1', 'RF2', 'RF3', 'RF4', 'RF5', 'RF6'],
};

console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.musica.rock);
console.log(persona.musica.trap.duki);
console.log(persona.peliculas[2]);


// ----- OTRO -----
var animales = [
  {
    nombre: 'Vaca',
    comida: true
  },
  {
    nombre: 'Aguila',
    comida: false
  },
  {
    nombre: 'Ballena',
    comida: false
  },
  {
    nombre: 'Murcielago',
    comida: true
  },
]

console.warn("Acceso a valores de un arreglo de objetos animales: ")
console.log('Animal: ' + animales[3].nombre + ' - Comida: ' + animales[3].comida);


console.warn("Recorrer arreglo de animales con for:")
for (let i = 0; i < animales.length; i++) {
  const animal = animales[i];
  console.log(animal);
  console.log('* Otra forma:');
  console.log('Animal: ' + animal.nombre + ' - Comida: ' + animal.comida);
}


console.warn("Recorrer arrelgo de animales con forEach:")
animales.forEach(animal => {
  console.log(animal);
  console.log('* Otra forma:');
  console.log('Animal: ' + animal.nombre + ' - Comida: ' + animal.comida);
});


