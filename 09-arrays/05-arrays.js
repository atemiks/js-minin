const clientsEstimations = [];
const askClientToGiveEstimation = () => {
    const userRating = Number(
        prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim()
    );

    if (userRating >= 1 && userRating <= 10) {
        clientsEstimations.push(userRating);
        console.log(clientsEstimations);
    }
};

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((rating) => rating > 5);
const notGoodEstimations = clientsEstimations.filter((rating) => rating <= 5);
alert(
    `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
);
