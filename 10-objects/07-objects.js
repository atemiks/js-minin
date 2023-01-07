const getKiller = (suspectInfo, deadPeople) => {
    suspectInfo = Object.entries(suspectInfo);
    let killer = [];

    suspectInfo.forEach((person) => {
        const suspectName = person[0];
        const suspectSeenPersons = person[1];

        const isKiller = deadPeople.every((deadName) => {
            return suspectSeenPersons.includes(deadName);
        });

        if (isKiller) {
            killer.push(suspectName);
        }
    });

    return killer;
};

const killer = getKiller(
    {
        James: ['Jacob', 'Bill', 'Lucas'],
        Johnny: ['David', 'Kyle', 'Lucas'],
        Peter: ['Lucy', 'Kyle'],
    },
    ['Bill', 'Lucas']
);

console.log('killer', killer);
