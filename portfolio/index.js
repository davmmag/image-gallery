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