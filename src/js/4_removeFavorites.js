//REMOVE FAVS - FUNCTIONS
function handleRemoveOne(ev) {
  const clickedCrossId = parseInt(ev.currentTarget.dataset.id);
  const objectIndex = favoriteCharacters.findIndex(
    (eachCharacter) => eachCharacter.char_id === clickedCrossId
  );
  if (favoriteCharacters.length > 1) {
    favoriteCharacters.splice(objectIndex, 1);
    paintFavList();
    setInLocalStorage(favoriteCharacters);
    //actualizar subarray de favoritos buscados:
    //Recorrer este subarray y encontrar el indice del objeto fav buscado cuyo id coincida con el indice del elemento sobre el que he hecho click en la cruz
    //Volver a lanzar la funcion de pintar busqueda con este subarray actualizado
    //for (let i = 0; i < favSearchedCharacters)
  } else {
    favoriteCharacters.splice(objectIndex, 1);
    favsSection.classList.add('collapsed');
    localStorage.removeItem('Favorites');
  }
}

function handleRemoveAll() {
  favoriteCharacters = [];
  favsSection.classList.add('collapsed');
  localStorage.removeItem('Favorites');
  paintCharacterList(characters);
}

//REMOVE FAVS - EVENTS
function removeCardListener() {
  const removeIcons = document.querySelectorAll('.js_remove_fav');
  removeIcons.forEach((icon) => {
    icon.addEventListener('click', handleRemoveOne);
  });
}

resetBtn.addEventListener('click', handleRemoveAll);
