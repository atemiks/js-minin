const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: 'Максим' },
    { id: 2, name: 'Николай' },
    { id: 3, name: 'Ангелина' },
    { id: 4, name: 'Виталий' },
];

const giveTalonsInOrder = (patients, orders) => {
    patients = patients.reduce((acc, person) => {
        acc[person.id] = person;
        return acc;
    }, {});

    return orders.map((orderID) => patients[orderID]);
};

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
