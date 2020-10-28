// Ejercicio X:
function saludar(name, lastName){
  if(typeof name!== 'string' || typeof lastName !== 'string'){
    return 'Tienen que ser strings...'
  }
  return ('Hola '+ name + ' ' + lastName);
}
console.warn('Ejercicio X: ');
console.log("saludar('Nicolás', 'Pérez') =>", saludar('Nicolás', 'Pérez'))
console.log("saludar('Nicolás', 1) =>", saludar('Nicolás', 1))
console.log("saludar(1, 'Pérez') =>", saludar(1, 'Pérez'))
console.log("saludar(1, 1) =>", saludar(1, 1))

// Ejercicio 1
// hacer una funcion que sume dos parametros
function sumar(a, b){
  if (typeof a === 'number' && typeof b === 'number')
    return a + b;
  else
    return 'Debes ingresar números..'
}
console.warn('Ejercicio 1: ');
console.log('sumar(1, 2) =>', sumar(1, 2));
console.log("sumar('a', 2) =>", sumar('a', 2));

// Ejercicio 2
// hacer una funcion que reste dos parametros
function restar(a, b){
  if (typeof a === 'number' && typeof b === 'number')
    return a - b;
  else
    return 'Debes ingresar números..'
}
console.warn('Ejercicio 2: ');
console.log('restar(5, 1) =>', restar(5, 1));
console.log("sumar('a', 2) =>", sumar('a', 2));

// Ejercicio 3
// hacer una funcion que me indique si soy mayor de edad o no
function mayorEdad(edad){
  if (typeof edad === 'string')
    return 'Debes ingresar un número...'
  else if (edad >= 18)
    return true
  else
    return false
}
console.warn('Ejercicio 3: ');
console.log('mayorEdad(15) =>', mayorEdad(15));
console.log('mayorEdad(18) =>', mayorEdad(18));
console.log('mayorEdad(21) =>', mayorEdad(21));
console.log("mayorEdad('a') =>", mayorEdad('a'));

// Ejercicio 4
// hacer una funcion que evalue si el numero es 0, positivo o negativo
function verificarNumero(numero){
  if (typeof edad === 'string')
    return 'Debes ingresar un número...'
  else if (numero > 0)
    return 'El número es positivo.'
  else if (numero < 0)
    return 'El número es negativo.'
  else
    return 'El numero es 0.'
}
console.warn('Ejercicio 4: ');
console.log('verificarNumero(27) =>', verificarNumero(27));
console.log('verificarNumero(0) =>', verificarNumero(0));
console.log('verificarNumero(-27) =>', verificarNumero(-27));
console.log("verificarNumero('a') =>", verificarNumero('a'));

// Ejercicio 5
// hacer una funcion que retorne si es vocal o consonante
function verificarLetra(letra){
  if (typeof letra === 'string'){
    var letraMinuscula = letra.toLowerCase();
    if(letraMinuscula.length > 1)
      return 'Debes ingresar un solo caracter.'
    else{
      if(['a','e','i','o','u'].includes(letraMinuscula))
        return (letra + ' es una vocal.')
      else
        return (letra + ' es una consonante.')
    }
  }
  else
    return 'Debes ingresar un caracter.'
}
console.warn('Ejercicio 5: ');
console.log("verificarLetra('e') =>", verificarLetra('e'));
console.log("verificarLetra('A') =>", verificarLetra('A'));
console.log("verificarLetra('g') =>", verificarLetra('g'));
console.log('verificarLetra(5) =>', verificarLetra(5));
console.log("verificarLetra('asdasasd') =>", verificarLetra('asdasasd'));

// Ejercicio 6
// hacer una funcion para el juego de piedra papel y tijera
function verificadorGanador(player1, player2){
  player1 = player1.toLowerCase();
  player2 = player2.toLowerCase();

  if(player1 === player2)
    return 'Empate'
  else if(player1 === 'piedra'){
    if (player2 === 'papel')
      return 'Gana Jugador 2'
    else
      return 'Gana Jugador 1'
  }
  else if(player1 === 'papel'){
    if (player2 === 'tijeras')
      return 'Gana Jugador 2'
    else
      return 'Gana Jugador 1'
  } 
  else if(player1 === 'tijeras'){
    if (player2 === 'piedra')
      return 'Gana Jugador 2'
    else
      return 'Gana Jugador 1'
  }else{
    return 'Debes ingresar jugadas válidas (piedra, papel o tijeras).'
  }
}

console.warn('Ejercicio 6: ');
console.log("verificadorGanador('Tijeras', 'Piedra') =>", verificadorGanador('Tijeras', 'Piedra'));
console.log("verificadorGanador('papel', 'Piedra') =>", verificadorGanador('papel', 'Piedra'));
console.log("verificadorGanador('Piedra', 'Piedra') =>", verificadorGanador('Piedra', 'Piedra'));
console.log("verificadorGanador('Varita Mágica', 'Piedra') =>", verificadorGanador('Varita Mágica', 'Piedra'));