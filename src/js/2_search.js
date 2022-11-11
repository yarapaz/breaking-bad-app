//Elements
const form = document.querySelector('.js_form');
const searchInput = document.querySelector('.js_search_input');
const searchBtn = document.querySelector('.js_search_btn');
let searchedCharacters = [];

//Functions
//1. Filter way (faster)
function handleSearch(ev) {
  ev.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  const searchedCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(inputValue)
  );
  console.log(searchedCharacters);
  paintCharactersCards(searchedCharacters);
}

//2.Fetch way (slower)
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

//Events
searchBtn.addEventListener('click', handleSearch);
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
});
