const heroPlayer = {
    name: 'Герой',
    health: 100,
    heatEnemy: (enemy) => {
        enemy.health -= 10;
    },
};

const enemyPlayer = {
    name: 'Злодей',
    health: 100,
    heatHero: (hero) => {
        hero.health -= 10;
    },
};

const getRandomNumber = () => {
    return Math.round(Math.random());
};

const startGame = (heroPlayer, enemyPlayer) => {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        const randomNumber = getRandomNumber();

        if (randomNumber == 0) {
            heroPlayer.heatEnemy(enemyPlayer);
        }
        if (randomNumber == 1) {
            enemyPlayer.heatHero(heroPlayer);
        }
    }

    if (heroPlayer.health > 0) {
        return `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`;
    }

    if (enemyPlayer.health > 0) {
        return `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`;
    }
};

console.log(startGame(heroPlayer, enemyPlayer));
