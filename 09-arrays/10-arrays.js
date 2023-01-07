const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const matrixString = [].concat(...matrix);

// const matrixString = matrix.reduce((acc, element) => {
//     return [...acc, ...element];
// }, []);

console.log(matrixString);
