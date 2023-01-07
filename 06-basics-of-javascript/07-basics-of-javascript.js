const clientName = prompt('Введите имя клиента');
let clientSpentToday = prompt('Сколько клиент потратил сегодня');
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
clientSpentToday = Number(clientSpentToday);
clientSpentForAllTime = Number(clientSpentForAllTime);

if (clientSpentToday && clientSpentForAllTime) {
    let discount = 0;
    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 10;
        alert(`Вам предоставляется скидка в ${discount}%`);
    }

    if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
        alert(`Вам предоставляется скидка в ${discount}%`);
    }

    if (clientSpentForAllTime >= 500) {
        discount = 30;
        alert(`Вам предоставляется скидка в ${discount}%`);
    }

    alert(
        `Спасибо, ${clientName}! ` +
            `К оплате ${
                clientSpentToday - (clientSpentToday / 100) * discount
            }$. ` +
            `За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`
    );
} else {
    alert(
        'Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.'
    );
}
