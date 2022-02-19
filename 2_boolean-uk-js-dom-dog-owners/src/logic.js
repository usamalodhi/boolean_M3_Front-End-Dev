//? Functions For Business Logic
//? ---> toggle naught dog yes or no
export function isDogGood(dog, goodDogButton) {
  let goodDog = dog.isGoodDog;
  goodDogButton.innerText = (goodDog ? 'Good ' : 'Bad ') + 'Dog!';
  return (goodDog = false ? 'no' : 'yes');
}

export function newDogInput(input) {
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
    // data = [newDog, ...data];
    // newArray = [newElement, ...array];
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
