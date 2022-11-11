//ELEMENTS
const charactersList = document.querySelector('.js_characters_list');
let characters = [];
let favouriteCharacters = [];

//FUNCTIONS

//Get API info
function getAPIinfo() {
  fetch('https://www.breakingbadapi.com/api/characters/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      characters = data;
    });
}

//Render Character Card
function renderCharacterCard(character) {
  //Li + article + div / h2 / h3
  const liEl = document.createElement('li');
  const articleEl = document.createElement('article');

  const imgEl = document.createElement('div');
  imgEl.style = `background-image: ${character.img}`;

  const nameEl = document.createElement('h2');
  const nameContent = document.createTextNode(`${character.name}`);
  nameEl.appendChild(nameContent);

  const statusEl = document.createElement('h3');
  const statusContent = document.createTextNode(`${character.status}`);
  statusEl.appendChild(statusContent);

  articleEl.appendChild(imgEl);
  articleEl.appendChild(nameEl);
  articleEl.appendChild(statusEl);
  liEl.appendChild(articleEl);
}

function paintCharactersCards() {}
