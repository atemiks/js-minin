let peopleWaiting = [
    'Кристина',
    'Олег',
    'Кирилл',
    'Мария',
    'Светлана',
    'Артем',
];

const giveParcel = (array) => {
    const name = array.shift();
    console.log(
        `${name} получил(а) посылку. В очереди осталось ${array.length} человек`
    );
};

const leaveQueueWithoutParcel = (array) => {
    const name = array.pop();
    console.log(`${name} не получил(а) посылку и ушел(ла) из очереди`);
};

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

for (let i = peopleWaiting.length; i > 0; i--) {
    leaveQueueWithoutParcel(peopleWaiting);
}
