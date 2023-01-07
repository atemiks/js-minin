const quiz = {
    q1: {
        q: 'Сколько будет 2 + 2?',
        a: 4,
    },
    q2: {
        q: 'Сколько будет 2 * 2?',
        a: 4,
    },
    q3: {
        q: 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
        a: 1,
    },
    q4: {
        q: 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
        a: 12,
    },
    q5: {
        q: 'Сколько будет 2+2*2?',
        a: 6,
    },
};

let correctAnswers = 0,
    incorrectAnswers = 0;

for (let key in quiz) {
    let userAnswer = Number(prompt(quiz[key].q));
    userAnswer === quiz[key].a ? correctAnswers++ : incorrectAnswers++;
}

alert(`Правильных ответов ${correctAnswers}`);
alert(`Неправильных ответов ${incorrectAnswers}`);
