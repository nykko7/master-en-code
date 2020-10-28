//Variable que referencia al contenedor:
const container = document.getElementById("container");

//Variable con la cantidad de pokemones:
const pokemons_number = 150;

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

//Se obtienen los 150 pokemones:
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
}

//Funcion que permite leer la API de pokemon:
const getPokemon = async (id) => {
  //URL de la API a partir del id ingresado por parametro:
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  //Accede al URL y guarda el json en la const "pokemon"
  const response = await fetch(url);
  const pokemon = await response.json();
  
  //Teniendo el pokemon en formato json
  createPokemonCard(pokemon);
}

//Crea la Card del pokemon:
function createPokemonCard(pokemon){
  //Se crea un div con la clase 'card'
  const card = document.createElement('div');
  card.classList.add('card');

  //Variable que almacena el nombre del pokemon con inicial mayúscula :
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  
  //Variable que almacena el id del pokemon y le da formato de 3 digitos:
  const number = '#' + pokemon.id.toString().padStart(3, '0');

  //Variable que almacena los tipos del pokemon y luego los une en un string (si posee mas de un tipo):
  const pokemon_types = pokemon.types.map(type => type.type.name);
  const pokemon_types_string = pokemon_types[1] ? pokemon_types[0] + ', ' + pokemon_types[1] : pokemon_types[0];

  //Variable que busca el color para la tarjeta a partir del tipo de pokemon:
  const color = colors[pokemon_types[0]];

  //Se asigna el color segun el tipo:
  card.style.backgroundColor = color;
  
  //Variable que almacena la ruta de la imagen desde otra api con imagenes en HD:
  const image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`

  //Se insertan los datos del pokemon en la tarjeta dinámicamente:
  const cardInnerHTML = `
    <div class="card-image">    
      <img src=${image} alt="${name}">
    </div>
    <div class="card-body">
      <p class="card-number">${number}</p>	
      <h5 class="card-name">${name}</h5>
      <p class="card-type"><strong>Type(s): </strong>${pokemon_types_string}</p>
      <p class="card-weight"><strong>Weight: </strong>${pokemon.weight/10} kg.</p>
    </div>
  `;
  //Se agrega el contenido html al elemento card:
  card.innerHTML = cardInnerHTML;
  //Se agrega la tarjeta al contenedor de tarjetas:
  container.appendChild(card);

}

fetchPokemons();