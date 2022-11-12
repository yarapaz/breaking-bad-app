//START-APP FUNCTIONS

//Get API info
function getAPIinfo() {
  fetch('https://www.breakingbadapi.com/api/characters', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      characters = data;
      getFromLocalStorage();
      paintCharactersCards(characters);
    });
}

//Render character card & paint characters cards

// 1. InnerHTML method

// 1.1. Render Character Card
// function renderCharacterCard(characterObj) {
//   let cardHtml = '';
//   cardHtml = `<li><article class="js_card" data-id="${characterObj.char_id}"><div class="characters__img" style="background-image:url('${characterObj.img}')"></div><h2>${characterObj.name}</h2><h3>${characterObj.status}</h3></article></li>`;
//   return cardHtml;
// }

// 1.2. Paint Characters Cards
// function paintCharactersCards(cardsArray) {
//   let listHtml = '';
//   for (let i = 0; i < cardsArray.length; i++) {
//     listHtml += renderCharacterCard(cardsArray[i]);
//   }
//   charactersList.innerHTML = listHtml;
//   cardListener();
// }

// 2. Advanced DOM method

// 2.1. Render Character Card
function renderCard(characterObj) {
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

// 2.2. Paint Characters Cards
function paintCharactersCards(cardsArray) {
  charactersList.innerHTML = '';
  for (let i = 0; i < cardsArray.length; i++) {
    charactersList.appendChild(renderCard(cardsArray[i]));
  }
  selectCardListener();
}

//START-APP EVENTS

//Get info from API and LS when page refreshes
getAPIinfo();
