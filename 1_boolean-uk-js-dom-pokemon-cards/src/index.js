// import data
import { data } from './data.js';
const pokemonCardsArray = data;

// test for successful import and export - DELETE
console.log(pokemonCardsArray[0]);

let dynamicCode = ``;

pokemonCardsArray.forEach(function (pokemonObjects) {
  dynamicCode =
    dynamicCode +
    `<li class="card">
    <h2 class="card--title">${pokemonObjects.name}</h2>
    <img
      width="256"
      class="card--img"
      src='${pokemonObjects.sprites.other['official-artwork'].front_default}'
    />
    <ul class="card--text">
      <li>${pokemonObjects.stats[0].stat.name}: ${pokemonObjects.stats[0].base_stat}</li>
      <li>${pokemonObjects.stats[1].stat.name}: ${pokemonObjects.stats[1].base_stat}</li>
      <li>${pokemonObjects.stats[2].stat.name}: ${pokemonObjects.stats[2].base_stat}</li>
      <li>${pokemonObjects.stats[3].stat.name}: ${pokemonObjects.stats[3].base_stat}</li>
      <li>${pokemonObjects.stats[4].stat.name}: ${pokemonObjects.stats[4].base_stat}</li>
      <li>${pokemonObjects.stats[5].stat.name}: ${pokemonObjects.stats[5].base_stat}</li>
    </ul>
  </li>
  `;
});

const pokemonCards = document.querySelector('.pokemon__cards');

pokemonCards.innerHTML = dynamicCode;
