const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10,
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22,
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104,
    },
];

const getOnlineUsers = () => {
    const onlineUsers = users.filter((element) => element.status === 'online');
    const usersOnlineNames = onlineUsers.map((element) => element.username);

    return `Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`;
};

const onlineUsers = getOnlineUsers(users);
console.log(onlineUsers);
