const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums';

const getAlbums = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderAlbums(data);
    } catch (error) {
        console.log('error', error);
    }
};

const renderAlbums = async () => {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <span class="loader" hidden >Loading</span>
        `
    );

    const loader = document.querySelector('.loader');
    loader.removeAttribute('hidden');

    try {
        const response = await fetch(ALBUM_URL);

        if (!response.ok) {
            throw new Error('Connection error');
        }

        const data = await response.json();

        document.body.insertAdjacentHTML(
            'beforeend',
            `
            <ul class="data-container" >
                ${data.map((element) => `<li>${element.title}</li>`).join('')}
            </ul>
            `
        );

        loader.remove();
    } catch (error) {
        console.error(error);
        loader.textContent = 'Error. Please try again.';
    }
};

renderAlbums();
