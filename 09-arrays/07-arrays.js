const goals = [8, 1, 1, 3, 2, -1, 5];

const maxNumberOfGoals = (arrayOfGoals) => {
    return Math.max(...arrayOfGoals);
};

const minNumberOfGoals = (arrayOfGoals) => {
    return Math.min(...arrayOfGoals.filter((element) => element !== -1));
};

console.log('maxNumberOfGoals', maxNumberOfGoals(goals));
console.log('minNumberOfGoals', minNumberOfGoals(goals));

const scoringMatch = (arrayOfGoals, maxGoalsOfMatchCallback) => {
    const maxGoals = maxGoalsOfMatchCallback(arrayOfGoals),
        indexOfMatch = arrayOfGoals.indexOf(maxGoals);

    return (
        `Самый результативный матч был под номером ${indexOfMatch + 1}. ` +
        `В нем было забито ${maxGoals} гол(ов).`
    );
};

console.log('scoringMatch', scoringMatch(goals, maxNumberOfGoals));

const unScoringMatch = (arrayOfGoals, minGoalsOfMatchCallback) => {
    const minGoals = minGoalsOfMatchCallback(arrayOfGoals);
    const indexOfMinGoalsMatch = arrayOfGoals
        .map((element, index) => {
            return element === minGoals ? index + 1 : '';
        })
        .filter(String);

    return `Самые нерезультативные матчи были под номерами ${indexOfMinGoalsMatch}. В каждом из них было забито по ${minGoals} мячу(а).`;
};

console.log('unScoringMatch', unScoringMatch(goals, minNumberOfGoals));

const totalScoringMatch = (arrayOfGoals) => {
    const positiveGoals = arrayOfGoals.filter((element) => element > -1);
    const totalGoals = positiveGoals.reduce((acc, element) => {
        return acc + element;
    }, 0);

    return `Общее количество голов за сезон равно ${totalGoals}`;
};

console.log('totalScoringMatch', totalScoringMatch(goals));

const hasAutoDefeat = (arrayOfGoals) => {
    const isAutoDefeat = arrayOfGoals.includes(-1);

    if (isAutoDefeat) {
        return `Были автоматические поражения: да`;
    }

    if (!isAutoDefeat) {
        return `Были автоматические поражения: нет`;
    }
};

console.log('hasAutoDefeat', hasAutoDefeat(goals));

const averageGoalsOfMatch = (arrayOfGoals) => {
    const totalGoals = arrayOfGoals
        .filter((element) => element > -1)
        .reduce((acc, element) => {
            return acc + element;
        }, 0);

    const averageGoals = (totalGoals / arrayOfGoals.length).toFixed(2);

    return `Среднее количество голов за матч равно ${averageGoals}`;
};

console.log('averageGoalsOfMatch', averageGoalsOfMatch(goals));

const ascendingGoalsOfMatch = (arrayOfGoals) => {
    let ascendingGoalsArray = JSON.parse(JSON.stringify(arrayOfGoals));

    ascendingGoalsArray.sort((a, b) => {
        return a - b;
    });

    return ascendingGoalsArray;
};

console.log('ascendingGoalsOfMatch', ascendingGoalsOfMatch(goals));
