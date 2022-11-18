'use strict';

//DOM elements
const favsSection = document.querySelector('.js_favorites');
const charactersList = document.querySelector('.js_characters_list');
const favsList = document.querySelector('.js_favorites_list');
const forms = document.querySelectorAll('.js_form');
const searchInput = document.querySelector('.js_search_input');
const searchBtn = document.querySelector('.js_search_btn');
const resetBtn = document.querySelector('.js_reset_btn');
const home = document.querySelector('.js_home');
const header = document.querySelector('.js_header');

//Constants
let characters = [];
let favoriteCharacters = [];
let searchedCharacters = [];
