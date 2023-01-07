const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: false,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2023',
    },
];

const allowVisa = (people) => {
    const nowTime = Date.now();
    const approvePeople = people.filter((person) => {
        const passportExpirationReverse = person.passportExpiration
            .split('.')
            .reverse()
            .join('.');
        const passportExpirationTime = Date.parse(passportExpirationReverse);

        return (
            person.criminalRecord === false && passportExpirationTime > nowTime
        );
    });

    return approvePeople;
};

const result = allowVisa(peopleWithVisa);
console.log('result', result);
