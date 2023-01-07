const myName = 'Артем';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Минин';
const reasonText = 'хочу быть современнм разработчиком веб приложений';
const numberOfMonth = 6;

/**
 * Всем привет!
 * Меня зовут, myName.
 * Сейчас я изучаю язык программирования programmingLanguage
 * на курсе по programmingLanguage у courseCreatorName.
 * Я хочу стать веб-разработчиком, потому что reasonText.
 * До этого я изучал(а) programmingLanguage numberOfMonth месяцев.
 * Я уверен(а), что пройду данный курс до конца!
 * */

// let myInfoText =
//     'Всем привет! ' +
//     'Меня зовут, ' +
//     myName +
//     '. ' +
//     'Сейчас я изучаю язык программирования ' +
//     programmingLanguage +
//     ' на курсе по ' +
//     programmingLanguage +
//     ' у ' +
//     courseCreatorName +
//     '. ' +
//     'Я хочу стать веб-разработчиком, потому что ' +
//     reasonText +
//     '. ' +
//     'До этого я изучал(а) ' +
//     programmingLanguage +
//     ' ' +
//     numberOfMonth +
//     ' месяцев. ' +
//     'Я уверен(а), что пройду данный курс до конца!';

let myInfoText =
    `Всем привет! Меня зовут, ${myName}. ` +
    `Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. ` +
    `Я хочу стать веб-разработчиком, потому что ${reasonText}. ` +
    `До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. ` +
    `Я уверен(а), что пройду данный курс до конца!`;

console.log(myInfoText);
