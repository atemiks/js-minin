const clientName = 'Игорь',
    clientSpentForAllTime = 110,
    clientSpentToday = 25;

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
