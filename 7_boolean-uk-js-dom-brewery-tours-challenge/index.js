const state = {
  breweries: [],
};

const selectState = document.getElementById('select-state');
const breweriesList = document.getElementById('breweries-list');
const filterBreweryType = document.getElementById('filter-by-type');

const createHTMLEl = (htmlTag) => {
  htmlElement = document.createElement(htmlTag);
  return htmlElement;
};

const fetchData = () => {
  let urlPath = `https://api.openbrewerydb.org/breweries?by_state=${selectState.value}`;
  if (filterBreweryType.value) {
    urlPath = urlPath + `&by_type=${filterBreweryType.value}`;
  }
  fetch(urlPath)
    .then((response) => response.json())
    .then((breweries) => {
      state.breweries = breweries;
      allowedData(breweries);
    });
};

const searchBureauInState = () => {
  const searchByStateForm = document.querySelector('#select-state-form');
  searchByStateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchData();
  });
};

const filterByType = () => {
  filterBreweryType.addEventListener('change', () => {
    fetchData();
  });
};

const allowedType = (brewery) => {
  if (['micro', 'regional', 'brewpub'].indexOf(brewery.brewery_type) > -1)
    return true;
};

const allowedData = (breweries) => {
  breweriesList.innerHTML = '';
  breweries.forEach((brewery) => {
    if (allowedType(brewery)) {
      render(brewery);
    }
  });
};

const render = (brewery) => {
  const breweryElement = createHTMLEl('li');
  breweryElement.classList.add('doesSearchWork');
  breweryElement.innerHTML = `
    <h2 id="breweryName">${brewery.name}</h2>
    <div class="type">${brewery.brewery_type}</div>
    <section class="address">
      <h3>Address:</h3>
      <p>${brewery.street}</p>
      <p><strong>${brewery.city}, ${brewery.postal_code}</strong></p>
    </section>
    <section class="phone">
      <h3>Phone:</h3>
      <p>${brewery.phone}</p>
    </section>
    <section class="link">
      <a href="${brewery.website_url}" target="_blank">Visit Website</a>
    </section>`;
  breweriesList.append(breweryElement);
};

const init = () => {
  searchBureauInState();
  filterByType();
};

init();

// Extension 1
function searchFunction() {
  let input, filter, li, filterOnTag, i, txtValue;
  input = document.getElementById('search-breweries');
  filter = input.value.toUpperCase();
  ul = document.getElementById('breweries-list');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    filterOnTag = li[i].getElementsByTagName('h2')[0];
    txtValue = filterOnTag.textContent || filterOnTag.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
