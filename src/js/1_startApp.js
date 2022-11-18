//START-APP - FUNCTIONS

//Get API info
function getAPIinfo() {
  fetch('https://www.breakingbadapi.com/api/characters', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      characters = data.map((eachData) => {
        const mappedData = {
          char_id: eachData.char_id,
          img: eachData.img,
          name: eachData.name,
          occupation: eachData.occupation,
          status: eachData.status,
        };
        return mappedData;
      });
      getFromLocalStorage();
      paintCharacterList(characters);
    })
    .catch((error) =>
      console.log(
        `¡Ups! Ha ocurrido un error ${error} al cargar los datos desde la API. Vuelva a intentarlo más tarde`
      )
    );
}

//Render character card & paint characters cards

// 2. Advanced DOM method

// 2.1. Render Character Card
function renderCard(characterObj) {
  const liEl = document.createElement('li');
  liEl.classList.add('characters__list_item');

  const articleEl = document.createElement('article');
  articleEl.classList.add('js_card');
  articleEl.classList.add('characters__card');
  articleEl.setAttribute('id', characterObj.char_id);
  articleEl.setAttribute('data-id', characterObj.char_id);

  const imgEl = document.createElement('div');
  imgEl.setAttribute('style', `background-image:url('${characterObj.img}`);
  imgEl.classList.add('characters__img');

  const nameEl = document.createElement('h2');
  const nameContent = document.createTextNode(`${characterObj.name}`);
  nameEl.classList.add('characters__name');
  nameEl.appendChild(nameContent);

  const occupationListEl = document.createElement('ul');
  occupationListEl.classList.add('characters__occupation_list');

  for (let i = 0; i < characterObj.occupation.length; i++) {
    const occupationEl = document.createElement('li');
    const occupationContent = document.createTextNode(
      characterObj.occupation[i]
    );
    occupationEl.classList.add('characters__occupation_list__item');
    occupationEl.appendChild(occupationContent);
    occupationListEl.appendChild(occupationEl);
  }

  const statusEl = document.createElement('p');
  const statusContent = document.createTextNode(`${characterObj.status}`);
  statusEl.classList.add('characters__status');
  statusEl.appendChild(statusContent);

  articleEl.appendChild(imgEl);
  articleEl.appendChild(nameEl);
  articleEl.appendChild(occupationListEl);
  articleEl.appendChild(statusEl);
  liEl.appendChild(articleEl);
  return liEl;
}

// 2.2. Paint Character Cards
function paintCharacterList(cardArray) {
  charactersList.innerHTML = '';
  if (favoriteCharacters.length === 0) {
    for (let i = 0; i < cardArray.length; i++) {
      charactersList.appendChild(renderCard(cardArray[i]));
    }
    selectedCardListener();
  } else if (favoriteCharacters.length !== 0) {
    for (let i = 0; i < cardArray.length; i++) {
      charactersList.appendChild(renderCard(cardArray[i]));
    }
    for (let i = 0; i < favoriteCharacters.length; i++) {
      const characterInFav = cardArray.find(
        (character) => character.char_id === favoriteCharacters[i].char_id
      );
      if (characterInFav !== undefined) {
        const characterHtml = document.getElementById(characterInFav.char_id);
        characterHtml.classList.add('selected');
      }
    }
    selectedCardListener();
  }
}

//Render error messages

function noFavoritesMessage() {
  const noFavEl = document.createElement('p');
  const noFavContent = document.createTextNode(
    'Todavía no tienes ningún favorito seleccionado'
  );
  noFavEl.classList.add('header__no_fav_text');
  noFavEl.classList.add('js_no_fav_text');
  noFavEl.appendChild(noFavContent);
  header.appendChild(noFavEl);
}

function searchErrorMessage() {
  const errorEl = document.createElement('p');
  const errorContent = document.createTextNode(
    'El nombre introducido no existe. Introduzca un nombre válido, por favor'
  );
  errorEl.classList.add('header__error_text');
  errorEl.classList.add('js_error_text');
  errorEl.appendChild(errorContent);
  header.appendChild(errorEl);
}

//START-APP - EVENTS

//Get info from API and LS when app starts
getAPIinfo();

home.addEventListener('click', () => {
  searchInput.value = '';
  const errorText = document.querySelector('.js_error_text');
  if (errorText !== null) {
    errorText.remove();
  }
  paintCharacterList(characters);
});
