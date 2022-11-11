'use strict';
//Elements

let favouriteCharacters = [];

//Function
function handleSelection(ev) {
  const clickedCardId = parseInt(ev.currentTarget.dataset.id);
  const clickedCardIndex = characters.findIndex(
    (character) => character.char_id === clickedCardId
  );
  //Seguir desarrollando la lógica para meter elementos dentro del array de favoritos
}

//Events
//Probar a hacerlo con bucle ForEach() para iterar sobre nodes en vez de transformarlo en un array para iterar sobre él con un bucle normal
function cardListener() {
  const cards = document.querySelectorAll('.js_card');
  const cardsArray = Array.from(cards);
  for (const card of cardsArray) {
    card.addEventListener('click', handleSelection);
  }
}
