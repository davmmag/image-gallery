import './styles/style.scss';

const SEARCH = document.querySelector('.search');
const CONTENT = document.querySelector('.content');
const CLEAR_ICON = document.querySelector('.search__close-icon');
const BTN_SEARCH = document.querySelector('.search__icon');
let URL = `https://api.unsplash.com/photos?page=2&per_page=21&client_id=wdMiGp849PdPDqo6Dbf8rws33Fwjfjz8qjknrDVbs_U`;

const loadData = async (url) => {
  try {
    const RESPONSE = await fetch(url);
    if (RESPONSE.ok) {
      let data = await RESPONSE.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    loadData(URL);
  }
};

const createImg = (src, name, container, title) => {
  const img = document.createElement('div');
  img.classList.add(name);
  img.title = title;
  img.style.backgroundImage = `url(${src})`;
  container.append(img);
  img.addEventListener('click', () => window.open(src, '_blank'));
};

const createGallery = async (container, nameOfImage, url) => {
  const data = await loadData(url);
  container.innerHTML = '';
  if (data['results']) {
    for (let item of data['results']) {
      createImg(`${item['urls']['raw']}&w=1366&h=768`, nameOfImage, container, item['alt_description']);
    }
  } else {
    for (let item in data) {
      createImg(`${data[item]['urls']['raw']}&w=1366&h=768`, nameOfImage, container, data[item]['alt_description']);
    }
  }
};

const createSearchURL = (query) => `https://api.unsplash.com/search/photos?query=${query}&per_page=21&client_id=wdMiGp849PdPDqo6Dbf8rws33Fwjfjz8qjknrDVbs_U`;

const clearSearchValue = (clearButton, searchBlock) => {
  if (searchBlock.value.length) {
    searchBlock.value = '';
    clearButton.style.opacity = 0;
  }
};

const changeButtonState = (clearBtn, searchBlock) => {
  clearBtn.style.opacity = '1';
  if (searchBlock.value === '') clearBtn.style.opacity = 0;
}

window.addEventListener('load', () => {
  clearSearchValue(CLEAR_ICON, SEARCH);
  createGallery(CONTENT, 'content__img', URL);
});

SEARCH.addEventListener('keydown', e => {
  if (e.key === 'Enter' && SEARCH.value.length) {
    const searchURL = createSearchURL(SEARCH.value);
    createGallery(CONTENT, 'content__img', searchURL);
  }
});

SEARCH.addEventListener('input', () =>  {
  changeButtonState(CLEAR_ICON, SEARCH);
});

CLEAR_ICON.addEventListener('click', () => clearSearchValue(CLEAR_ICON, SEARCH));
BTN_SEARCH.addEventListener('click', () => {
  if (SEARCH.value.length) {
    const searchURL = createSearchURL(SEARCH.value);
    createGallery(CONTENT, 'content__img', searchURL);
  }
});