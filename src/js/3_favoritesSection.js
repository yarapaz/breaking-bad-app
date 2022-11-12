'use strict';
//Elements
const favsSection = document.querySelector('.js_favorites');
const favsList = document.querySelector('.js_favorites_list');

//Function
function paintFavCharacters() {
  favsList.innerHTML = '';
  favsSection.classList.remove('collapsed');
  for (const fav of favoriteCharacters) {
    favsList.appendChild(renderFavCard(fav));
  }
}

function renderFavCard(characterObj) {
  const liEl = document.createElement('li');

  const articleEl = document.createElement('article');
  articleEl.classList.add('js_card');
  articleEl.classList.add('selected');
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

function handleSelection(ev) {
  const clickedCardId = parseInt(ev.currentTarget.dataset.id);
  const selectedCard = characters.find(
    (eachCharacter) => eachCharacter.char_id === clickedCardId
  );
  favoriteCharacters.push(selectedCard);
  // const clickedCardIndex = favoriteCharacters.findIndex(
  //   (eachCharacter) => eachCharacter.char_id === clickedCardId
  // );
  paintFavCharacters();
  setInLocalStorage(favoriteCharacters);
}

//Events

//1. Manipulating ordinary Array
// function cardListener() {
//   const cards = document.querySelectorAll('.js_card');
//   const cardsArray = Array.from(cards);
//   for (const card of cardsArray) {
//     card.addEventListener('click', handleSelection);
//   }
// }

//2. Manipulating NodeList
function cardListener() {
  const cards = document.querySelectorAll('.js_card');
  cards.forEach((card) => {
    card.addEventListener('click', handleSelection);
  });
}
