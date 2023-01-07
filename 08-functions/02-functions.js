const getSumOfNumbers = (number, type = 'odd') => {
    let totalOfNumbers = 0;

    if (type === 'odd') {
        for (let i = 1; i <= number; i += 2) {
            totalOfNumbers += i;
        }
        return totalOfNumbers;
    }

    if (type === 'even') {
        for (let i = 0; i <= number; i += 2) {
            totalOfNumbers += i;
        }
        return totalOfNumbers;
    }

    if (type === '') {
        for (let i = 0; i <= number; i++) {
            totalOfNumbers += i;
        }
        return totalOfNumbers;
    }
};

console.log(getSumOfNumbers(10, 'even'));
