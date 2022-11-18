//SEARCH - FUNCTIONS

//HandleSearch

//1. Filter method
function handleSearch(ev) {
  const inputValue = searchInput.value.toLowerCase();
  const inputValidated = /^[a-zA-Z]+$/.exec(inputValue);
  searchedCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(inputValidated[0])
  );
  checkSearch();
}

function checkSearch() {
  if (searchedCharacters.length === 0) {
    const noFavText = document.querySelector('.js_no_fav_text');
    if (noFavText !== null) {
      noFavText.remove();
    }
    errorMessage();
    paintCharacterList(characters);
  } else {
    const errorText = document.querySelector('.js_error_text');
    if (errorText !== null) {
      errorText.remove();
    }
    const noFavText = document.querySelector('.js_no_fav_text');
    if (noFavText !== null) {
      noFavText.remove();
    }
    noFavoritesMessage();
    paintCharacterList(searchedCharacters);
  }
}

function checkIfSearch() {
  if (searchedCharacters.length === 0) {
    paintCharacterList(characters);
  } else {
    paintCharacterList(searchedCharacters);
  }
}

//SEARCH - EVENTS

//Add click event to search button
searchBtn.addEventListener('click', handleSearch);

//Remove form default behaviour
for (const form of forms) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
  });
}
