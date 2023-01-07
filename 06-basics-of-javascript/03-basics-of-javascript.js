const quiz = {
    q1: 'JavaScript появился в 1995 году',
    q2: 'Спецификация JavaScript называется ECMAScript',
    q3: 'JavaScript был создан за 1 месяц',
};

for (let key in quiz) {
    let userAnswer = confirm(`${quiz[key]}?`);
    if (userAnswer) {
        alert('Верно');
    }

    if (!userAnswer) {
        alert(quiz[key]);
    }
}
