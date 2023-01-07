const getDivisorsCount = (number = 1) => {
    if (!(number >= 1 && Number.isInteger(number))) {
        console.log('number должен быть целым числом и больше нуля!');
        return;
    }

    let counterOfNumbers = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            counterOfNumbers++;
        }
    }

    return counterOfNumbers;
};

console.log(getDivisorsCount(30));
