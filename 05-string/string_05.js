const userString = prompt('Введите текст для обрезки').trim();
const startSliceIndex =
    Number(prompt('Введите индекс, с которого нужно начать обрезку строки')) ||
    0;
const endSliceIndex =
    Number(prompt('Введите индекс, которым нужно закончить обрезку строки')) ||
    userString.length;

const resultString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${resultString}`);
