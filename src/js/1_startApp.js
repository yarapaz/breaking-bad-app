//ELEMENTS
const charactersList = document.querySelector('.js_characters_list');
let characters = [];

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

//InnerHTML way
// //1. Render Character Card
// function renderCharacterCard(characterObj) {
//   let cardHtml = '';
//   cardHtml = `<li><article><div class="characters__img" style="background-image:url('${characterObj.img}')"></div><h2>${characterObj.name}</h2><h3>${characterObj.status}</h3></article></li>`;
//   console.log(cardHtml);
//   return cardHtml;
// }

// //2. Paint Characters Cards
// function paintCharactersCards(charactersArr) {
//   let listHtml = '';
//   for (let i = 0; i < charactersArr.length; i++) {
//     listHtml += renderCharacterCard(charactersArr[i]);
//   }
//   charactersList.innerHTML = listHtml;
// }

//Advanced DOM way
//1. Render Character Card
function renderCharacterCard(characterObj) {
  const liEl = document.createElement('li');

  const articleEl = document.createElement('article');
  articleEl.classList.add('js_card');
  articleEl.setAttribute('data-id', characterObj.char_id);

  const imgEl = document.createElement('div');
  imgEl.setAttribute('style', `background-image:url('${characterObj.img}`);
  imgEl.classList.add('characters__img');

  const nameEl = document.createElement('h2');
  const nameContent = document.createTextNode(`${characterObj.name}`);
  nameEl.appendChild(nameContent);

  const statusEl = document.createElement('h3');
  const statusContent = document.createTextNode(`${characterObj.status}`);
  statusEl.appendChild(statusContent);

  articleEl.appendChild(imgEl);
  articleEl.appendChild(nameEl);
  articleEl.appendChild(statusEl);
  liEl.appendChild(articleEl);
  return liEl;
}

//2. Paint Characters Cards
function paintCharactersCards(charactersArr) {
  charactersList.innerHTML = '';
  for (let i = 0; i < charactersArr.length; i++) {
    charactersList.appendChild(renderCharacterCard(charactersArr[i]));
  }
  cardListener();
}

getAPIinfo();
