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
