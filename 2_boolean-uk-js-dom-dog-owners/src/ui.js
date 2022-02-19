export function createElement(htmlTag) {
  const element = document.createElement(htmlTag);
  return element;
}

export function createTextElement(htmlTag, htmlText) {
  const element = document.createElement(htmlTag);
  element.innerText = htmlText;
  return element;
}

export function createProfile(parentEl, dog) {
  const dogName = createTextElement('h2', dog.name);
  const dogImage = createElement('img');
  dogImage.setAttribute('src', dog.image);
  parentEl.append(dogName, dogImage);
}

export function createLabel(parentEl, inputLabel, labelFor) {
  const label = createTextElement('label', inputLabel);
  label.setAttribute('for', labelFor);
  parentEl.append(label);
}

export function createInput(parentEl, labelFor, inputType) {
  const input = createElement('input');
  input.setAttribute('type', inputType);
  input.id = labelFor;
  input.setAttribute('name', labelFor);
  parentEl.append(input);
  return input;
}

export function addElToForm(parentEl, inputLabel, labelFor, inputType) {
  createLabel(parentEl, inputLabel, labelFor);
  createInput(parentEl, labelFor, inputType);
}

export function renderDogBehaviour(parentEl, dog) {
  const naughtyDog = createElement('p');
  const italicText = createTextElement('em', 'Is naughty? ');
  const goodDogButton = createElement('button');
  goodDogButton.id = 'toggle';
  const isNaughty = isDogGood(dog, goodDogButton);
  naughtyDog.append(italicText, isNaughty);
  parentEl.append(naughtyDog, goodDogButton);
}

export function createDogListItem(dogs) {
  const dog = createTextElement('li', dogs.name);
  dog.className = 'dogs-list__button';
  dog.id = dogs.id;
  return dog;
}

// ? ---> create Bio
export function createBio(parentEl, dog) {
  const dogBioCtnr = createElement('div');
  dogBioCtnr.className = 'main__dog-section__desc';
  parentEl.append(dogBioCtnr);
  const headerBio = createTextElement('h3', 'Bio');
  const textBio = createTextElement('p', dog.bio);
  dogBioCtnr.append(headerBio, textBio);
}
