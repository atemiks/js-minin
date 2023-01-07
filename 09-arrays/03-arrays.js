const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeeName = prompt('Поиск кофе по названию:').trim();

const findCoffee = (nameOfCoffee, arrayOfCoffee) => {
    const indexOfSearch = arrayOfCoffee.findIndex((element) => {
        return element.toLowerCase() === nameOfCoffee.toLowerCase();
    });

    if (indexOfSearch !== -1) {
        alert(
            `Держите ваш любимый кофе ${arrayOfCoffee[indexOfSearch]}. 
            Он ${indexOfSearch + 1}-й по популярности в нашей кофейне.`
        );
    }

    if (indexOfSearch === -1) {
        alert('К сожалению, такого вида кофе нет в наличии');
    }
};

findCoffee(coffeeName, coffees);
