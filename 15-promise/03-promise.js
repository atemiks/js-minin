const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos/';

const getFastestLoadedPhoto = (ids) => {
    const photoUrls = ids.map((id) => fetch(`${PHOTO_URL}/${id}`));

    toggleLoader();

    Promise.race(photoUrls)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Неверный адрес');
            }

            return response.json();
        })
        .then((data) => {
            renderPhotoCard(data);
        })
        .catch((error) => console.error(error))
        .finally(toggleLoader);
};

const renderPhotoCard = (photo) => {
    const container = document.querySelector('#data-container');
    container.insertAdjacentHTML(
        'beforeend',
        `
        <li class="photo-item" >
            <img class="photo-item__image" src="${photo.url}" title="${photo.title}" >
            <h3 class="photo-item__title" >${photo.title}</h3>
        </li>
        `
    );
};

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');

    if (isHidden) {
        loader.removeAttribute('hidden');
    }

    if (!isHidden) {
        loader.setAttribute('hidden', '');
    }
};

getFastestLoadedPhoto([60, 12, 55]);
