const todaysWinner = { prize: '10 000$' };

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    201: {
        name: 'Светлана',
        age: 20,
    },
    304: {
        name: 'Екатерина',
        age: 35,
    },
};

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getWinner = (applicants, winnerObject) => {
    const applicantsKeys = Object.keys(applicants);
    const randomNumber = getRandomNumberInRange(0, applicantsKeys.length);
    const winnerIndex = applicantsKeys[randomNumber];
    const winnerPerson = applicants[winnerIndex];

    return {
        ...winnerObject,
        ...winnerPerson,
    };
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);
