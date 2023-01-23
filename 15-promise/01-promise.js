const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
    toggleLoader();

    fetch(USERS_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Неверный адрес');
            }

            return response.json();
        })
        .then((data) => renderUsers(data))
        .catch((error) => console.error(error))
        .finally(toggleLoader);
};

const renderUsers = (users) => {
    const usersContainer = document.getElementById('data-container');

    users.map((user) =>
        usersContainer.insertAdjacentHTML(
            'beforeend',
            `
            <li>
                <a href="#link">${user.name}</a>
            </li>
            `
        )
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

getUsers();
