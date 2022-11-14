//SEARCH - FUNCTIONS

//HandleSearch

//1. Filter method
function handleSearch(ev) {
  ev.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  const searchedCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(inputValue)
  );
  paintCharacterList(searchedCharacters);
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
