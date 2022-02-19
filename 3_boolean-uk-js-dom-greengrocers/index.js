import { state } from './state.js';

let itemList = document.querySelector('.store--item-list');
const cartList = document.querySelector('.cart--item-list');
const totalNumber = document.querySelector('.total-number');

const createlistElement = (item) => {
  const listElement = document.createElement('li');
  const classes = ['filterItems', 'all', `${item.type}`];
  listElement.classList.add(...classes);
  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', item.img);
  imageElement.setAttribute('alt', item.name);
  const cartButton = document.createElement('button');
  cartButton.innerText = `add to basket`;

  listElement.append(imageElement, cartButton);

  cartButton.addEventListener('click', function () {
    addProductToCart(item);
    createCartItems();
    renderCartTotalCost();
    cartButton.setAttribute('disabled', cartButton);
  });
  console.log(listElement);
  return listElement;
};

const renderItems = () => {
  for (const item of state.items) {
    const listElement = createlistElement(item);
    itemList.append(listElement);
  }
};

const addProductToCart = (item) => {
  const foundItem = state.cart.find(function (item) {
    return item.id === item.productId;
  });
  if (foundItem) {
    ++foundItem.quantity;
    foundItem.price = foundItem.quantity * item.price;
  } else {
    const cartItemData = {
      productId: item.id,
      quantity: 1,
      price: item.price,
      name: item.name,
      img: item.img,
    };
    state.cart.push(cartItemData);
  }
};

const decreaseQuantity = (item) => {
  item.quantity--;
  return item;
};

const increaseQuantity = (item) => {
  item.quantity++;
  return item;
};

const createCartItem = (item) => {
  const listcartElement = document.createElement('li');
  const imageCartElement = document.createElement('img');
  imageCartElement.setAttribute('class', 'cart--item-icon');
  imageCartElement.setAttribute('src', item.img);
  imageCartElement.setAttribute('alt', item.name);
  const cartItemTextElement = document.createElement('p');
  cartItemTextElement.innerText = item.name;

  const removeButton = document.createElement('button');
  removeButton.setAttribute('class', 'quantity-btn remove-btn center');
  removeButton.innerText = '-';
  removeButton.addEventListener('click', function () {
    item = decreaseQuantity(item);
    if (removeZeroItem(item)) {
      createCartItems();
    }

    spanCartElement.innerText = item.quantity;
    renderCartTotalCost();
  });

  const spanCartElement = document.createElement('span');
  spanCartElement.setAttribute('class', 'quantity-text center');
  spanCartElement.innerText = item.quantity;
  const addButton = document.createElement('button');
  addButton.setAttribute('class', 'quantity-btn add-btn center');
  addButton.innerText = '+';
  addButton.addEventListener('click', function () {
    item = increaseQuantity(item);
    spanCartElement.innerText = item.quantity;
    renderCartTotalCost();
  });

  listcartElement.append(
    imageCartElement,
    cartItemTextElement,
    removeButton,
    spanCartElement,
    addButton
  );

  return listcartElement;
};

const createCartItems = () => {
  cartList.innerHTML = '';
  for (const item of state.cart) {
    const listcartElement = createCartItem(item);
    cartList.append(listcartElement);
  }
};

const renderCartTotalCost = () => {
  let totalPrice = 0;
  for (const item of state.cart) {
    const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;
  }
  totalNumber.innerText = `£${totalPrice.toFixed(2)}`;
};

const removeZeroItem = (item) => {
  let remove = false;
  for (let i = 0; i < state.cart.length; i++) {
    if (state.cart[i].quantity === 0 && state.cart[i].name === item.name) {
      state.cart.splice(i, 1);
      remove = true;
      return remove;
    }
  }
};

renderItems();
renderCartTotalCost();

$('#allButton, #fruitButton, #vegButton').click(function () {
  let show = $(this).attr('class');
  $('.filterItems').each(function () {
    $(this).show();
    let x = $(this).attr('class');
    if (x.indexOf(show) < 0) $(this).hide();
  });
});
