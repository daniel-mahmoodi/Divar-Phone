const container = document.getElementById('container');
const loading = document.querySelector('.loader');
let page = 1;
let i = 0
    // need to change
getPost();
getPost();
getPost();
getPost();
getPost();
getPost();
getPost();
getPost();

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight - 5) {
        showLoading();
    }
});

function showLoading() {
    loading.classList.add('show');
    setTimeout(getPost, 1000)
}

async function getPost() {
    const getResponse = await fetch(`https://swapi.dev/api/vehicles/?page=${page}&format=json`);
    const getData = await getResponse.json();
    const data = getData.results[`${i}`]
    addDataToDOM(data);

}

function addDataToDOM(data) {
    const getElement = document.createElement('div');
    getElement.classList.add('flex-item');
    getElement.innerHTML = `
    <a href="">
     <div class="flex-item--content">
     <div  class="imgStyle">
     <h2 class="title">${data.name}</h2>
     <p class="flex-item--content--p">${data.model}</p>
     </div>
     <div class="imgStyle">
     <img src="./img/pic-${i}.jpg">
     </div>
     </div>
    </a>
`;
    container.appendChild(getElement);
    loading.classList.remove('show');
    // need to change
    if (page <= 3) {
        if (i < 9) {
            i++
        } else {
            page++
            i = 0
        }
    } else if (page == 4) {
        if (i < 8) {
            i++
        } else {
            page = 1;
            i = 0
        }
    } else {
        page = 1;
        i = 0
    }
}