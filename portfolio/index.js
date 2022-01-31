import i18Obj from './translate.js';
const MENU = document.querySelector('.menu-btn');
const THEME_BTN = document.querySelector('.header__theme');
const BTN_CONTROLS = document.querySelectorAll('.portfolio__btn');
const IMAGES = document.querySelectorAll('.portfolio__img img');
const BTNS_LANG = document.querySelectorAll('.btn__lang');
const TRANSLATE_ITEMS = document.querySelectorAll('[data-i18]');

//Menu 
const activeMenu = (event, element) => {
    event.preventDefault();
    element.classList.toggle('menu-btn__active');
    document.querySelector('.burger').classList.toggle('burger-active')
}

MENU.addEventListener('click', e => activeMenu(e, MENU))
   
//Theme
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.className = localStorage.getItem('theme');
})
const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}
const changeTheme = () => localStorage.getItem('theme') === 'dark' ? setTheme('light') : setTheme('dark');
THEME_BTN.addEventListener('click', changeTheme);

//Portfolio
const selectImages = (btns, images) => {
    for(let btn of btns) {
        btn.addEventListener('click', e => {
            let currentBtn = e.currentTarget.dataset.type;
            for(let i = 0; i < images.length; i++) {
                images[i].src = `assets/img/${currentBtn}/${i + 1}.jpg`;
                images[i].alt = `${currentBtn} photo`;
            }
        })
    }
}

selectImages(BTN_CONTROLS, IMAGES);

//Change language
const getTranslate = (lang) => {
    let trs = Array.from(TRANSLATE_ITEMS) 
    for(let key in i18Obj[lang]) {
         for(let item of trs) {
             if(item.dataset.i18 == key) {
                if(item.placeholder) item.placeholder = i18Obj[lang][key];
                item.textContent = i18Obj[lang][key];
             }
         }
    }
}

for(let btn of BTNS_LANG) {
    btn.addEventListener('click', e => {
        if (e.target.dataset.lang === 'russian') {
            getTranslate('ru');
        } else {
            getTranslate('en')
        }
    })
}
console.log(`Смена изображений в секции portfolio +25
            Перевод страницы на два языка +25
            Переключение светлой и тёмной темы +25
            Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5
            Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5`);

