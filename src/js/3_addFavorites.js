'use strict';

//ADD FAVS - FUNCTIONS

//Render fav character card
function renderFavCard(characterObj) {
  const liEl = document.createElement('li');

  const articleEl = document.createElement('article');
  articleEl.classList.add('js_card');
  articleEl.classList.add('selected');

  const crossEl = document.createElement('p');
  const crossContent = document.createTextNode('x');
  crossEl.appendChild(crossContent);
  crossEl.classList.add('js_remove_fav');
  crossEl.setAttribute('data-id', characterObj.char_id);

  const imgEl = document.createElement('div');
  imgEl.setAttribute('style', `background-image:url('${characterObj.img}`);
  imgEl.classList.add('characters__img');

  const nameEl = document.createElement('h2');
  const nameContent = document.createTextNode(`${characterObj.name}`);
  nameEl.appendChild(nameContent);

  const statusEl = document.createElement('h3');
  const statusContent = document.createTextNode(`${characterObj.status}`);
  statusEl.appendChild(statusContent);

  articleEl.appendChild(crossEl);
  articleEl.appendChild(imgEl);
  articleEl.appendChild(nameEl);
  articleEl.appendChild(statusEl);
  liEl.appendChild(articleEl);
  return liEl;
}

//Paint favs characters
function paintFavCharacters() {
  favsList.innerHTML = '';
  favsSection.classList.remove('collapsed');
  for (const fav of favoriteCharacters) {
    favsList.appendChild(renderFavCard(fav));
  }
  removeCardListener();
}

//Handle card selection
function handleSelection(ev) {
  const clickedCardId = parseInt(ev.currentTarget.dataset.id);
  const selectedCard = characters.find(
    (eachCharacter) => eachCharacter.char_id === clickedCardId
  );
  const foundCardIndex = favoriteCharacters.findIndex(
    (eachCard) => eachCard.char_id === clickedCardId
  );
  if (foundCardIndex === -1) {
    favoriteCharacters.push(selectedCard);
    paintFavCharacters();
    setInLocalStorage(favoriteCharacters);
  } else {
    if (favoriteCharacters.length > 1) {
      favoriteCharacters.splice(foundCardIndex, 1);
      paintFavCharacters();
      setInLocalStorage(favoriteCharacters);
    } else {
      favoriteCharacters.splice(foundCardIndex, 1);
      favsSection.classList.add('collapsed');
      localStorage.removeItem('');
    }
  }
}

//ADD FAVS - EVENTS

//Add click events to cards

//1. InnerHtml method
// function cardListener() {
//     const cards = document.querySelectorAll('.js_card');
//     for (const card of cardsArray) {
//       card.addEventListener('click', handleSelection);
//     }
//   }

//2. Advanced DOM method

//2.1. Manipulate ordinary Array
// function cardListener() {
//   const cards = document.querySelectorAll('.js_card');
//   const cardsArray = Array.from(cards);
//   for (const card of cardsArray) {
//     card.addEventListener('click', handleSelection);
//   }
// }

//2.2. Manipulate NodeList
function selectCardListener() {
  const cards = document.querySelectorAll('.js_card');
  cards.forEach((card) => {
    card.addEventListener('click', handleSelection);
  });
}
