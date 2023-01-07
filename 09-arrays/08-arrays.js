const getMathResult = (...expression) => {
    const numbers = expression.filter((element) => Number(element));
    const firstNumber = Number(numbers[0]) || 0;
    const lastNumber = Number(numbers[numbers.length - 1]) || 0;
    const operator = expression.filter(
        (element) =>
            element === '>' ||
            element === '<' ||
            element === '=' ||
            element === '+' ||
            element === '-' ||
            element === '*' ||
            element === '/'
    );

    switch (operator[0]) {
        case '>':
            return firstNumber > lastNumber;
        case '<':
            return firstNumber < lastNumber;
        case '=':
            return firstNumber === lastNumber;
        case '+':
            return firstNumber + lastNumber;
        case '-':
            return firstNumber - lastNumber;
        case '*':
            return firstNumber * lastNumber;
        case '/':
            return firstNumber / lastNumber;
        default:
            return 'Ошибка';
    }
};

console.log(getMathResult('a', '100', 200, '350', '+', 'b', 'c'));
