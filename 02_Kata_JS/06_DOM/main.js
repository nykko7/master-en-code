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
// hacer una función que sume dos parametros
function sumar(a, b){
  if (typeof a === 'number' && typeof b === 'number')
    return a + b;
  else
    return 'Debes ingresar números..'
}
function ejercicio1(){
  var a = Number(document.getElementById('ej1_a').value);
  var b = Number(document.getElementById('ej1_b').value);
  var resp = document.getElementById('ej1_resp');
  var suma = sumar(a,b);
  resp.textContent = suma;
}
//CONSOLA:
console.warn('Ejercicio 1: ');
console.log('sumar(1, 2) =>', sumar(1, 2));
console.log("sumar('a', 2) =>", sumar('a', 2));

// Ejercicio 2
// hacer una función que reste dos parametros
function restar(a, b){
  if (typeof a === 'number' && typeof b === 'number')
    return a - b;
  else
    return 'Debes ingresar números..'
}
function ejercicio2(){
  var a = Number(document.getElementById('ej2_a').value);
  var b = Number(document.getElementById('ej2_b').value);
  var resp = document.getElementById('ej2_resp');
  var resta = restar(a,b);
  resp.textContent = resta;
}
//CONSOLA:
console.warn('Ejercicio 2: ');
console.log('restar(5, 1) =>', restar(5, 1));
console.log("sumar('a', 2) =>", sumar('a', 2));

// Ejercicio 3
// hacer una función que me indique si soy mayor de edad o no
function mayorEdad(edad){
  if (typeof edad === 'string')
    return 'Debes ingresar un número...';
  else if (edad >= 18)
    return 'Eres Mayor de Edad.';
  else if (edad < 0)
    return 'Esa edad no existe...'
  else
    return 'Eres Menor de Edad.';
}
function ejercicio3(){
  var edad = Number(document.getElementById('ej3_edad').value);
  var resp = document.getElementById('ej3_resp');
  var verEdad = mayorEdad(edad);
  resp.textContent = verEdad;
}
//CONSOLA:
console.warn('Ejercicio 3: ');
console.log('mayorEdad(15) =>', mayorEdad(15));
console.log('mayorEdad(18) =>', mayorEdad(18));
console.log('mayorEdad(21) =>', mayorEdad(21));
console.log("mayorEdad('a') =>", mayorEdad('a'));

// Ejercicio 4
// hacer una función que evalue si el numero es 0, positivo o negativo
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
function ejercicio4(){
  var num = Number(document.getElementById('ej4_num').value);
  var resp = document.getElementById('ej4_resp');
  var verNum = verificarNumero(num);
  resp.textContent = verNum;
}
//CONSOLA:
console.warn('Ejercicio 4: ');
console.log('verificarNumero(27) =>', verificarNumero(27));
console.log('verificarNumero(0) =>', verificarNumero(0));
console.log('verificarNumero(-27) =>', verificarNumero(-27));
console.log("verificarNumero('a') =>", verificarNumero('a'));

// Ejercicio 5
// hacer una función que retorne si es vocal o consonante
function verificarLetra(letra){
  if(Number(letra)){
    return 'Debes ingresar una letra.'
  }
  else if (typeof letra === 'string'){
    var letraMinuscula = letra.toLowerCase();
    if(letraMinuscula.length > 1 || letraMinuscula.length <= 0)
      return 'Debes ingresar una letra.'
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
function ejercicio5(){
  var letra = document.getElementById('ej5_letra').value;
  var resp = document.getElementById('ej5_resp');
  var verLetra = verificarLetra(letra);
  resp.textContent = verLetra;
}
//CONSOLA:
console.warn('Ejercicio 5: ');
console.log("verificarLetra('e') =>", verificarLetra('e'));
console.log("verificarLetra('A') =>", verificarLetra('A'));
console.log("verificarLetra('g') =>", verificarLetra('g'));
console.log('verificarLetra(5) =>', verificarLetra(5));
console.log("verificarLetra('asdasasd') =>", verificarLetra('asdasasd'));

// Ejercicio 6
// hacer una función para el juego de piedra papel y tijera
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
function ejercicio6(){
  var player1 = document.getElementById('ej6_player1').value;
  var player2 = document.getElementById('ej6_player2').value;
  var resp = document.getElementById('ej6_resp');
  var verGanador = verificadorGanador(player1, player2);
  resp.textContent = verGanador;
}
//CONSOLA:
console.warn('Ejercicio 6: ');
console.log("verificadorGanador('Tijeras', 'Piedra') =>", verificadorGanador('Tijeras', 'Piedra'));
console.log("verificadorGanador('papel', 'Piedra') =>", verificadorGanador('papel', 'Piedra'));
console.log("verificadorGanador('Piedra', 'Piedra') =>", verificadorGanador('Piedra', 'Piedra'));
console.log("verificadorGanador('Varita Mágica', 'Piedra') =>", verificadorGanador('Varita Mágica', 'Piedra'));