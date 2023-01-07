const formContainer = document.createElement('form');
formContainer.className = 'create-user-form';

const labelNameContainer = document.createElement('label');
labelNameContainer.innerText = 'Имя';

const inputNameContainer = document.createElement('input');
inputNameContainer.setAttribute('type', 'text');
inputNameContainer.setAttribute('name', 'userName');
inputNameContainer.setAttribute('placeholder', 'Введите ваше имя');
inputNameContainer.setAttribute('required', 'required');

formContainer.append(labelNameContainer);
labelNameContainer.append(inputNameContainer);

const labelPasswordContainer = document.createElement('label');
labelPasswordContainer.innerText = 'Пароль';

const inputPasswordContainer = document.createElement('input');
inputPasswordContainer.setAttribute('type', 'password');
inputPasswordContainer.setAttribute('name', 'password');
inputPasswordContainer.setAttribute('placeholder', 'Придумайте пароль');
inputPasswordContainer.setAttribute('required', 'required');

formContainer.append(labelPasswordContainer);
labelPasswordContainer.append(inputPasswordContainer);

const buttonSubmitContainer = document.createElement('button');
buttonSubmitContainer.setAttribute('type', 'button');
buttonSubmitContainer.innerText = 'Отправить';

formContainer.append(buttonSubmitContainer);

document.body.append(formContainer);
