let matrix = [];
const matrixLenght = 5;
const matrixHeight = 3;

for (let i = 0; i < matrixHeight; i++) {
    const matrixRow = [];

    for (let k = 0; k < matrixLenght; k++) {
        matrixRow.push(k + 1);
    }

    matrix.push(matrixRow);
}

console.log(matrix);
