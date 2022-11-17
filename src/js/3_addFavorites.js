//ADD FAVS - FUNCTIONS

//Render fav character card
function renderFavCard(characterObj) {
  const liEl = document.createElement('li');

  const articleEl = document.createElement('article');
  articleEl.classList.add('selected');
  articleEl.classList.add('favorites__card');

  const crossEl = document.createElement('p');
  const iconEl = document.createElement('i');
  iconEl.classList.add('fa-solid');
  iconEl.classList.add('fa-xmark');
  crossEl.classList.add('js_remove_fav');
  crossEl.classList.add('favorites__cross--remove');
  crossEl.setAttribute('data-id', characterObj.char_id);
  crossEl.appendChild(iconEl);

  const imgEl = document.createElement('div');
  imgEl.setAttribute('style', `background-image:url('${characterObj.img}`);
  imgEl.classList.add('favorites__img');

  const nameEl = document.createElement('h2');
  const nameContent = document.createTextNode(`${characterObj.name}`);
  nameEl.classList.add('favorites__name');
  nameEl.appendChild(nameContent);

  const statusEl = document.createElement('h3');
  const statusContent = document.createTextNode(`${characterObj.status}`);
  statusEl.classList.add('favorites__status');
  statusEl.appendChild(statusContent);

  articleEl.appendChild(crossEl);
  articleEl.appendChild(imgEl);
  articleEl.appendChild(nameEl);
  articleEl.appendChild(statusEl);
  liEl.appendChild(articleEl);
  return liEl;
}

//Paint favs characters
function paintFavList() {
  favsSection.classList.remove('collapsed');
  favsList.innerHTML = '';
  for (let i = 0; i < favoriteCharacters.length; i++) {
    favsList.appendChild(renderFavCard(favoriteCharacters[i]));
  }
  removeCardListener();
}

//Handle card selection
function handleSelection(ev) {
  const clickedCardId = parseInt(ev.currentTarget.dataset.id);
  const selectedCard = characters.find(
    (eachCharacter) => eachCharacter.char_id === clickedCardId
  );

  console.log(selectedCard.name);

  const selectedCardIndexInFavArray = favoriteCharacters.findIndex(
    (eachCard) => eachCard.char_id === clickedCardId
  );
  if (selectedCardIndexInFavArray === -1) {
    favoriteCharacters.push(selectedCard);
    paintFavList();
    setInLocalStorage(favoriteCharacters);
    checkSearch();
  } else {
    if (favoriteCharacters.length > 1) {
      favoriteCharacters.splice(selectedCardIndexInFavArray, 1);
      paintFavList();
      setInLocalStorage(favoriteCharacters);
      checkSearch();
    } else {
      favoriteCharacters.splice(selectedCardIndexInFavArray, 1);
      favsSection.classList.add('collapsed');
      localStorage.removeItem('Favorites');
      checkSearch();
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
function selectedCardListener() {
  const cards = document.querySelectorAll('.js_card');
  cards.forEach((card) => {
    card.addEventListener('click', handleSelection);
  });
}
