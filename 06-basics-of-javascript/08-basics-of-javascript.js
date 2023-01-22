const userPassword = prompt(
    'Введите пароль. Пароль должен содержать минимум 3 символа, максимум 20, прописную букву и цифру'
);

const regExpUpperLetter = /[A-Z]/;
const regExpNumber = /[0-9]/;

if (
    userPassword.length >= 3 &&
    userPassword.length <= 20 &&
    userPassword.match(regExpUpperLetter) &&
    userPassword.match(regExpNumber)
) {
    alert('Пароль валидный. Добро пожаловать в аккаунт!');
} else {
    alert(
        'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'
    );
}
