const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?postId=';

const renderPost = (postId) => {
    const FETCH_POST_URL = fetch(`${POSTS_URL}/${postId}`);
    const FETCH_COMMENTS_URL = fetch(`${COMMENTS_URL}${postId}`);

    toggleLoader();

    Promise.all([FETCH_POST_URL, FETCH_COMMENTS_URL])
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
            const post = data[0];
            const comments = data[1];

            renderPostHTML(post, comments);
        })
        .catch((error) => console.error(error))
        .finally(toggleLoader);
};

const renderPostHTML = (post, comments) => {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
        <div id="post" class="post">
            <h1 class="post__title">${post.title}</h1>
            <p class="post__text">${post.body}</p>
            <b class="post__comments-text">Комментарии</b>
            <div class="post__comments">
                ${comments
                    .map((comment) => {
                        return `<div class="post-comment">
                            <span class="post-comment__author" >${comment.name}</span>
                            <span class="post-comment__text" >${comment.body}</span>
                        </div>`;
                    })
                    .join('')}
            </div>
        </div>
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

renderPost(1);
