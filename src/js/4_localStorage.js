function setInLocalStorage(favArray) {
  localStorage.setItem('Favorites', JSON.stringify(favArray));
}

function getFromLocalStorage() {
  const favListLS = JSON.parse(localStorage.getItem('Favorites'));
  if (favListLS !== null) {
    favoriteCharacters = favListLS;
    paintFavCharacters();
  }
}
