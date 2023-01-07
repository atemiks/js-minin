const userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введите слово из текста').trim();
const wordFromTextIndex = userText.indexOf(wordFromText);
const resultText = userText.slice(0, wordFromTextIndex);
alert(`Результат: ${resultText}`);
