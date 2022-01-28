const menu = document.querySelector('.menu-btn');
const themeBtn = document.querySelector('.header__theme');


menu.addEventListener('click', e => {
    activeMenu(e);
});
const activeMenu = e => {
    e.preventDefault();
    menu.classList.toggle('menu-btn__active');
    document.querySelector('.burger').classList.toggle('burger-active')
};
const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}
const changeTheme = () => localStorage.getItem('theme') === 'dark' ? setTheme('light') : setTheme('dark');
setTheme('dark');
themeBtn.addEventListener('click', () => {
    changeTheme();
})


//Portfolio

const BTN_CONTROLS = document.querySelectorAll('.portfolio__btn');
const IMAGES = document.querySelectorAll('.portfolio__img img');

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
