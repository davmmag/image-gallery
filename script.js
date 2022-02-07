const PREVIEW_OF_AUDIO = document.querySelector('.main__container');
const AUDIO_BTNS = document.querySelectorAll('.btn_audio');
const START_BTN = document.querySelector('.btn_start');
const DOWNLOAD_BTN = document.querySelector('.btn_download');
const AUDIO = new Audio();
const AUDIOS = ['drozd', 'forest', 'javoronok', 'slavka', 'solovey', 'zarynka'];
const THEME_BTN = document.querySelector('.header__theme');
const LOGO = document.querySelector('.logo');
const FOOTER_LOGO = document.querySelector('.footer__logo');
let audiosCurrent = 0;
let isPlaying = false;

const initDowloadAudio = (index) => {
    DOWNLOAD_BTN.href = `./assets/audio/${AUDIOS[index]}.mp3`;
    DOWNLOAD_BTN.title = `Download ${AUDIOS[index]}`;
    DOWNLOAD_BTN.download = `${AUDIOS[index]}`;
};

const changeImage = (index) => {
    PREVIEW_OF_AUDIO.style.backgroundImage = `url(./assets/img/${AUDIOS[index]}.jpg)`;
}

initDowloadAudio(audiosCurrent);

const audioStart = (index, audio) => {
    console.log(true)
    audio.src = `./assets/audio/${AUDIOS[index]}.mp3`;
    changeImage(index);
    initDowloadAudio(index)
    START_BTN.classList.add('played');
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
};

const initAudio = e => {
    audiosCurrent = e.target.dataset.audio;
    audioStart(audiosCurrent, AUDIO);
};

const stopAudio = (audio) => {
    audio.pause();
    START_BTN.classList.remove('played');
    isPlaying = false;
};

START_BTN.addEventListener('click', e => {
    e.preventDefault();
    isPlaying ? stopAudio(AUDIO) : audioStart(audiosCurrent, AUDIO)
});

for(let btn of AUDIO_BTNS) {
    btn.addEventListener('click', initAudio);
}

const changeElem = (theme) => {
    if(theme === 'light') {
        THEME_BTN.classList.remove('dark');
        LOGO.src = `./assets/svg/logo.svg`;
        FOOTER_LOGO.classList.remove('dark');
    } else {
        THEME_BTN.classList.add('dark');
        LOGO.src = `./assets/svg/logo1.svg`;
        FOOTER_LOGO.classList.add('dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let theme = localStorage.getItem('theme');
    document.documentElement.className = theme;
    changeElem(theme);
})
const setTheme = (theme) => {
    changeElem(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}
const changeTheme = () => localStorage.getItem('theme') === 'dark' ? setTheme('light') : setTheme('dark');
THEME_BTN.addEventListener('click', changeTheme);
console.log(`Вёрстка +10
есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать. Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5
в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
При кликах по интерактивным элементам меняется изображение +10
При кликах по интерактивным элементам меняется звук +10
Активный в данный момент интерактивный элемент выделяется стилем +10
Кнопка Play/Pause +20
есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10
внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10
Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо`)