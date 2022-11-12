//FUNCTIONS

//HandleSearch

//1. Filter method
function handleSearch(ev) {
  ev.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  const searchedCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(inputValue)
  );
  paintCharactersCards(searchedCharacters);
}

//2. Fetch method
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

//EVENTS
//Add click event to search button
searchBtn.addEventListener('click', handleSearch);

//Remove form default behaviour
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
});
