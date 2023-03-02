const button = document.querySelector('.get-pokemon');
button.addEventListener('click', getRandomPokemon)

const URL = 'https://pokeapi.co/api/v2/pokemon/';
const MAX_POKEMON = 151;

function getRandomNumber(maxNumber) {
    return 1 + Math.floor(Math.random() * maxNumber);
}

function getRandomPokemon() {
    const idPokemon = getRandomNumber(MAX_POKEMON);
    const url = URL + idPokemon + '/';
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data.name));
}
