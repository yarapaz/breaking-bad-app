//ELEMENTS
const charactersList = document.querySelector('.js_characters_list');
let characters = [];
let favouriteCharacters = [];

//FUNCTIONS

//Get API info
function getAPIinfo() {
  fetch('https://www.breakingbadapi.com/api/characters', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      characters = data;
      paintCharactersCards(characters);
    });
}

//Render Character Card
function renderCharacterCard(characterObj) {
  let cardHtml = '';
  cardHtml = `<li><article><div class="characters__box" style="background-image:url('${characterObj.img}')"></div><h2>${characterObj.name}</h2><h3>${characterObj.status}</h3></article></li>`;
  console.log(cardHtml);
  return cardHtml;
}

//Paint Character Cards
function paintCharactersCards(charactersArr) {
  let listHtml = '';
  for (let i = 0; i < charactersArr.length; i++) {
    listHtml += renderCharacterCard(charactersArr[i]);
  }
  charactersList.innerHTML = listHtml;
}

getAPIinfo();
