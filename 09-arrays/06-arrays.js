const numbers = [10, 4, 100, -5, 54, 2];

const sumOfCubeMethod01 = (arrayOfNumbers) => {
    let sumOfCubes = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sumOfCubes += arrayOfNumbers[i] ** 3;
    }

    return sumOfCubes;
};

const sumOfCubeMethod02 = (arrayOfNumbers) => {
    let sumOfCubes = 0;

    for (let number of arrayOfNumbers) {
        sumOfCubes += number ** 3;
    }

    return sumOfCubes;
};

const sumOfCubeMethod03 = (arrayOfNumbers) => {
    let sumOfCubes = 0;

    arrayOfNumbers.forEach((number) => {
        return (sumOfCubes += number ** 3);
    });

    return sumOfCubes;
};

const sumOfCubeMethod04 = (arrayOfNumbers) => {
    const sumOfCubes = arrayOfNumbers.reduce((sumOfNumbers, number) => {
        return sumOfNumbers + number ** 3;
    }, 0);

    return sumOfCubes;
};

const result01 = sumOfCubeMethod01(numbers);
console.log('result01', result01);

const result02 = sumOfCubeMethod02(numbers);
console.log('result02', result02);

const result03 = sumOfCubeMethod03(numbers);
console.log('result03', result03);

const result04 = sumOfCubeMethod04(numbers);
console.log('result04', result04);
