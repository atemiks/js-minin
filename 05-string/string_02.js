let myInfoText =
    `Всем привет! Меня зовут, ${myName}. ` +
    `Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. ` +
    `Я хочу стать веб-разработчиком, потому что ${reasonText}. ` +
    `До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. ` +
    `Я уверен(а), что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll('JavaScript', 'JavaScript'.toUpperCase());

console.log(myInfoText);
console.log('myInfoText length:', myInfoText.length);
console.log('myInfoText first letter:', myInfoText[0]);
console.log('myInfoText last letter:', myInfoText[myInfoText.length - 1]);
