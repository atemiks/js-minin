let userName = prompt('Как вас зовут?');
userName = userName.trim().toLocaleLowerCase();

let userAge = prompt('Сколько вам лет?');
userAge = Number(userAge) || 'неизвестно';

alert(`Вас зовут ${userName} и вам ${userAge} лет`);
