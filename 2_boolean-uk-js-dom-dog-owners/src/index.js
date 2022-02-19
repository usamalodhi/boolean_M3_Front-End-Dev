import {
  createElement,
  createTextElement,
  createProfile,
  createLabel,
  createInput,
  createDogListItem,
  createBio,
} from './ui.js';

import { isDogGood } from './logic.js';

const dogsMainSection = document.querySelector('.main__dog-section');
const addDogBtn = document.querySelector('.dogs-list__button--add');
const dogListCntr = document.querySelector('.dogs-list');
dogListCntr.className = 'dogs-list';
addDogBtn.addEventListener('click', displayAddDogForm);

function addElToForm(parentEl, inputLabel, labelFor, inputType) {
  createLabel(parentEl, inputLabel, labelFor);
  createInput(parentEl, labelFor, inputType);
}

function addTextAreaElementToForm(parentEl, inputLabel, labelFor, rows) {
  const label = createTextElement('label', inputLabel);
  label.setAttribute('for', labelFor);
  const textArea = createElement('textarea');
  textArea.setAttribute('rows', rows);
  textArea.setAttribute('name', labelFor);
  textArea.id = labelFor;
  parentEl.append(label, textArea);
}

function createDogCard(parentEl, dog) {
  parentEl.innerText = '';
  createProfile(parentEl, dog);
  createBio(parentEl, dog);
  renderDogBehaviour(parentEl, dog);
  const toggleBtn = document.querySelector('#toggle');
  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (toggleBtn.innerText === 'Good Dog!') {
      toggleBtn.innerText = 'Bad Dog!';
    } else {
      toggleBtn.innerText = 'Good Dog!';
    }
  });
}

function renderDogBehaviour(parentEl, dog) {
  const naughtyDog = createElement('p');
  const textGoodOrBad = createTextElement('em', 'Is naughty? ');
  let goodDogButton = createElement('button');
  goodDogButton.id = 'toggle';
  const isNaughty = isDogGood(dog, goodDogButton);
  naughtyDog.append(textGoodOrBad, isNaughty);
  parentEl.append(naughtyDog, goodDogButton);
}

data.forEach((dog) => {
  const dogLi = createDogListItem(dog);
  dogListCntr.append(dogLi);
});

function createForm(parentEl) {
  parentEl.innerText = '';
  const formHeader = createTextElement('h2', 'Add a new Dog');
  const formCtnr = createElement('form');
  formCtnr.className = 'form';
  addElToForm(formCtnr, 'Name', 'name', 'text');
  addElToForm(formCtnr, 'URL Link To Picture', 'image', 'url');
  addTextAreaElementToForm(formCtnr, 'Bio', 'bio', 5);
  const submitInput = createInput(formCtnr, 'submit', 'submit');
  submitInput.setAttribute('value', 'Submit');
  submitInput.className = 'form__button';
  parentEl.append(formHeader, formCtnr);
  newDogInput(submitInput);
}

function newDogInput(input) {
  input.addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const picture = document.querySelector('#image').value;
    const bio = document.querySelector('#bio').value;
    const newDog = {
      id: 0,
      name: name,
      profile: bio,
      image: picture,
    };
    data.unshift(newDog);
    for (let i = 0; i < data.length; i++) {
      data[i].id += 1;
    }

    dogListCntr.innerHTML = '';
    const addDogBtn = createTextElement('li', '+');
    addDogBtn.className = 'dogs-list__button dogs-list__button--add';
    dogListCntr.append(addDogBtn);
    addDogBtn.addEventListener('click', displayAddDogForm);
    data.forEach((dog) => {
      const dogLi = createDogListItem(dog);
      dogListCntr.append(dogLi);
    });
    document.querySelector('.header').append(dogListCntr);
    document.querySelector('.form').reset();
  });
}

function displayAddDogForm() {
  createForm(dogsMainSection);
}

dogListCntr.addEventListener('click', function (e) {
  e.preventDefault();
  let dogID = e.target.id;
  let li = e.target.closest('li');
  if (li.className === 'dogs-list__button dogs-list__button--add') {
    return;
  } else if (!li) {
    return;
  }
  createDogCard(dogsMainSection, data[dogID - 1]);
});
