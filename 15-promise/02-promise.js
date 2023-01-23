const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsersByIds = (ids) => {
    const urls = ids.map((id) => fetch(`${USERS_URL}/${id}`));

    toggleLoader();

    Promise.all(urls)
        .then((responses) => {
            const responsesArray = responses.map((response) => {
                if (!response.ok) {
                    throw new Error('Неверный адрес');
                }

                return response.json();
            });

            return Promise.all(responsesArray);
        })
        .then((data) => {
            data.forEach((user) => {
                renderUser(user);
            });
        })
        .catch((error) => console.error(error))
        .finally(toggleLoader);
};

const renderUser = (user) => {
    const usersContainer = document.querySelector('#data-container');
    usersContainer.insertAdjacentHTML(
        'beforeend',
        `
        <li>
            <a href="#link">${user.name}</a>
        </li>
    `
    );
};

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    isHidden = loader.hasAttribute('hidden');

    if (isHidden) {
        loader.removeAttribute('hidden');
    }

    if (!isHidden) {
        loader.setAttribute('hidden', '');
    }
};

getUsersByIds([5, 6, 2, 1]);
