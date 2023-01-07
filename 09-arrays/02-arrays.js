const getSumOfSequence = (number) => {
    let arrayOfNumbers = [];

    for (let i = 0; i < number; i++) {
        arrayOfNumbers[i] = i + 1;
    }

    return arrayOfNumbers[0] + arrayOfNumbers[arrayOfNumbers.length - 1];
};

const result = getSumOfSequence(5);
console.log(result);
