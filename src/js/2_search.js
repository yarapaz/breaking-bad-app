//SEARCH - FUNCTIONS

//HandleSearch

//1. Filter method
function handleSearch(ev) {
  ev.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  searchedCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(inputValue)
  );

  let favSearchedCharacters = [];
  for (let i = 0; i < favoriteCharacters.length; i++) {
    let favCharacter = searchedCharacters.find(
      (eachCharacter) => eachCharacter.char_id === favoriteCharacters[i].char_id
    );
    if (favCharacter !== undefined) {
      favSearchedCharacters.push(favCharacter);
    }
  }
  if (favSearchedCharacters.length === 0) {
    paintCharactersCards(searchedCharacters);
    selectCardListener();
  } else if (favSearchedCharacters.length !== 0) {
    charactersList.innerHTML = '';
    for (let i = 0; i < favSearchedCharacters.length; i++) {
      charactersList.appendChild(renderFavCard(favSearchedCharacters[i]));
      const favIndex = searchedCharacters.findIndex(
        (eachSearchedCharacter) =>
          eachSearchedCharacter.char_id === favSearchedCharacters[i].char_id
      );
      searchedCharacters.splice(favIndex, 1);
    }
    for (let i = 0; i < searchedCharacters.length; i++) {
      charactersList.appendChild(renderCard(searchedCharacters[i]));
    }
  }
  selectCardListener();
}

//2. Fetch method (without fav cards adjustment)
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

//Remove forms default behaviours
for (const form of forms) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
  });
}
