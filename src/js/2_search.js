//SEARCH - FUNCTIONS

//HandleSearch

//1. Filter method
function handleSearch(ev) {
  ev.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  searchedCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(inputValue)
  );

  for (let i = 0; i < favoriteCharacters.length; i++) {
    let favCharacter = searchedCharacters.find(
      (eachCharacter) => eachCharacter.char_id === favoriteCharacters[i].char_id
    );
    if (favCharacter !== undefined) {
      favSearchedCharacters.push(favCharacter);
    }
  }

  if (favSearchedCharacters.length === 0) {
    paintCharacterList(searchedCharacters);
    selectedCardListener();
  } else if (favSearchedCharacters.length !== 0) {
    charactersList.innerHTML = '';
    for (let i = 0; i < favSearchedCharacters.length; i++) {
      charactersList.appendChild(renderCard(favSearchedCharacters[i]));
      const cardInFav = document.getElementById(
        favSearchedCharacters[i].char_id
      );
      cardInFav.classList.add('selected');
      const cardInFavIndex = searchedCharacters.findIndex(
        (eachSearchedCharacter) =>
          eachSearchedCharacter.char_id === favSearchedCharacters[i].char_id
      );
      searchedCharacters.splice(cardInFavIndex, 1);
    }
    for (let i = 0; i < searchedCharacters.length; i++) {
      charactersList.appendChild(renderCard(searchedCharacters[i]));
    }
    selectedCardListener();
  }
}

//2. Fetch method (without fav cards arrangement)
// function handleSearch(ev) {
//   ev.preventDefault();
//   const inputValue = searchInput.value.toLowerCase();
//   fetch(`https://breakingbadapi.com/api/characters?name=${inputValue}`)
//     .then((response) => response.json())
//     .then((data) => {
//       searchedCharacters = data;
//       paintCharactersCards(searchedCharacters);
//     });
// }

//SEARCH - EVENTS

//Add click event to search button
searchBtn.addEventListener('click', handleSearch);

//Remove form default behaviour
for (const form of forms) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
  });
}
