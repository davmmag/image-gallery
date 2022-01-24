console.log(`
Вёрстка валидная +10
<header>, <main>, <footer> +2
шесть элементов <section> (по количеству секций) +2
только один заголовок <h1> +2
пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2
один элемент <nav> (панель навигации) +2
два списка ul > li > a (панель навигации, ссылки на соцсети) +2
десять кнопок <button> +2
два инпута: <input type="email"> и <input type="tel"> +2
один элемент <textarea> +2
три атрибута placeholder +2
блок <header> +6
секция hero +6
секция skills +6
секция portfolio +6
секция video +6
секция price +6
секция contacts +6
блок <footer> +6
для построения сетки используются флексы или гриды +2
при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
фоновый цвет тянется на всю ширину страницы +2
иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2
изображения добавлены в формате .jpg +2
есть favicon +2
Интерактивность, реализуемая через css +20
Score: 100
`);

const menu = document.querySelector('.menu-btn');
menu.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('menu-btn__active');
    document.querySelector('.burger').classList.toggle('burger-active')
})