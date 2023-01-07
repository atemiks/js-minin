const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    },
};

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    },
};

const makeDomestic = function (isDomestic) {
    console.log(
        `${this.type} по имени ${this.name} говорит ${this.makeSound()}`
    );

    return {
        ...this,
        isDomestic,
    };
};

const domesticDog = makeDomestic.bind(dog, true)();
const domesticDog2 = makeDomestic.call(dog, true);
const domesticBird = makeDomestic.apply(bird, [true]);
console.log(domesticDog);
console.log(domesticDog2);
console.log(domesticBird);
