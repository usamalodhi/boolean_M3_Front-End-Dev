const pokeForm = document.querySelector('.poke-form');
const pokeList = document.querySelector('.poke-list');
const urlPath = 'http://localhost:3000/pokemons/';

const createHTMLTag = (tag) => {
  return document.createElement(tag);
};

const deleteFromDB = (id) => {
  fetch(urlPath + id, {
    method: 'DELETE',
  });
};

const likePokemon = (id, isLiked) => {
  fetch(urlPath + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ liked: !isLiked }),
  });
};

const addPokemon = (pokemon) => {
  const liEl = createHTMLTag('li');
  const imgEl = createHTMLTag('img');
  const h2El = createHTMLTag('h2');
  const div = createHTMLTag('div');
  const buttonContainer = createHTMLTag('div');
  const deleteButton = createHTMLTag('button');
  const likeButton = createHTMLTag('button');

  liEl.classList.add('pokemon');
  imgEl.src = pokemon.image;

  h2El.innerText = pokemon.name;

  deleteButton.addEventListener('click', () => {
    deleteFromDB(pokemon.id);
  });
  deleteButton.innerText = 'delete';

  likeButton.innerText = 'like';
  likeButton.addEventListener('click', () => {
    likePokemon(pokemon.id, pokemon.liked);
  });
  if (pokemon.liked) {
    return likeButton.classList.add('liked');
  }

  liEl.append(imgEl, h2El);
  buttonContainer.append(deleteButton, likeButton);
  div.append(liEl, buttonContainer);
  pokeList.append(div);
};

const addPokemons = (pokemons) => {
  pokemons.forEach((pokemon) => addPokemon(pokemon));
};

const postPokemon = () => {
  pokeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pokemon = {
      name: pokeForm.name.value,
      image: pokeForm.image.value,
    };

    fetch(urlPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokemon),
    })
      .then((res) => res.json())
      .then((pokemon) => addPokemon(pokemon));
    pokeForm.reset();
  });
};

const init = () => {
  postPokemon();

  fetch(urlPath)
    .then((res) => res.json())
    .then((pokemons) => addPokemons(pokemons));
};

init();
