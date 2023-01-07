const existedUserLogin = 'the_best_user';
const existedUserPassword = '12345678';

const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert('Логин и (или) Пароль введены неверно!');
}
