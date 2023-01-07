const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        const attackerArmy = Object.entries(this).filter((attackerItem) =>
            Number(attackerItem[1])
        );
        const defenderArmy = Object.entries(defenderObject).filter(
            (defenderItem) => Number(defenderItem[1])
        );
        const superiorArmy = attackerArmy.filter(
            (attackerItem, index) => attackerItem[1] > defenderArmy[index][1]
        );
        const chanceToWin = [superiorArmy.length, defenderArmy.length];

        return chanceToWin;
    },
    improveArmy() {
        this.archer += 5;
        this.footSoldier += 5;
        this.cavalry += 5;
        this.artillery += 5;
    },
    attack(defenderObject) {
        const chanceToWin = this.checkChancesToWin(defenderObject);
        const ourArmyChances = chanceToWin[0];
        const maximumChances = chanceToWin[1];
        const winRation = ourArmyChances / maximumChances;

        if (winRation > 0.7) {
            console.log(
                'Мы усилились! Мы несомненно победим! Наши шансы высоки!'
            );
        } else {
            this.improveArmy();
            console.log(
                `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`
            );
        }
    },
};

const defender = { archer: 33, footSoldier: 50, cavalry: 40, artillery: 10 };

attacker.attack(defender);
attacker.attack(defender);
attacker.attack(defender);
