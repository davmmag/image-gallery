const search = document.querySelector('.search');
const content = document.querySelector('.content');
const img = document.querySelector('.content-img');
const close = document.querySelector('.close__icon');
const searchBtn = document.querySelector('.search__icon');
// let url =`https://api.unsplash.com/search/photos?query=spring&client_id=wdMiGp849PdPDqo6Dbf8rws33Fwjfjz8qjknrDVbs_U`;
let url = `https://api.unsplash.com/photos?page=2&per_page=21&client_id=wdMiGp849PdPDqo6Dbf8rws33Fwjfjz8qjknrDVbs_U`;

const createImages = (src) => {
    let img = document.createElement('div');
    img.className = 'content-img';
    img.title = src.description;
    img.style.backgroundImage = `url(${src})`;
    content.append(img);
    img.addEventListener('click', () => {
        window.open(src, '_blank');
    });
}

async function getPhotos(url) {
    try {
        let response = await fetch(url);
        if(response.ok) {
            let data = await response.json();
            if(data.results) {
                for(let item of data.results) {createImages(`${item.urls.raw}&w=1366&h=768`);}
            }
            for(let item of data) {
                createImages(`${item.urls.raw}&w=1366&h=768`);
            }
        } else {throw new Error(response.statusText);}
    } catch(err) {
        console.log(err);
    }

}

// async function getSearchPhotos(url) {
//     try {
//         let response = await fetch(url);
//         if(response.ok) {
//             let data = await response.json();
//             for(let item of data.results) {createImages(item);}
//         } else {
//             throw new Error(response.statusText)
//         }
//     } catch(err) {
//         console.log(err);
//     }
// }




window.addEventListener('load', () => {
    search.focus();
    getPhotos(url);
});
search.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        content.innerHTML = '';
        getPhotos(url);
    }
});

const clearSearchValue = (deleteValue) => {
    close.style.opacity = '1';
    if(search.value === '') {
        close.style.opacity = 0;
    }
    if(deleteValue) {
        search.value = '';
        close.style.opacity = 0;
    }
}

search.addEventListener('input', () =>  {
    clearSearchValue();
    url = `https://api.unsplash.com/search/photos?query=${search.value}&per_page=21&client_id=wdMiGp849PdPDqo6Dbf8rws33Fwjfjz8qjknrDVbs_U`;
});

close.addEventListener('click', () => clearSearchValue(true));

searchBtn.addEventListener('click', () => {
    content.innerHTML = '';
    getPhotos(url);
})

///////=====================================

// const apiRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         resolve(fetch(url));
//     }).then(response => {
//         if(!response.ok) throw Error(response.statusText);
//         return response.json();
//     })
//     .then(data => {
//         for(let item of data.results) {createImages(item);}
//     })
//     .catch(error => console.log(error));
// };

// async function apiRequest(url) {
//     try {
//         let response = await fetch(url);
//         if(response.ok) {
//             let data = await response.json();
//             for(let item of data.results) {createImages(item);}
//         } else {
//             throw new Error(response.statusText)
//         }
//     } catch(err) {
//         console.log(err);
//     }
// }
