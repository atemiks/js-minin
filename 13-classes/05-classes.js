class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }

    // Полиморфизм -- переопределение метода в дочерних классах
    code() {}
    learnNewTechnology(...technology) {
        this.technologies.push(...technology);
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Junior';
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
        return console.log(`Junior разработчик пишет код ${this.technologies}`);
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Middle';
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }

    code() {
        return console.log(`Middle разработчик пишет код ${this.technologies}`);
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Senior';
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }

    code() {
        return console.log(`Senior разработчик пишет код ${this.technologies}`);
    }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code();
middleDeveloper.code();
seniorDeveloper.code();

console.log(
    juniorDeveloper.fullName,
    juniorDeveloper.age,
    juniorDeveloper.position
);

console.log(
    middleDeveloper.fullName,
    middleDeveloper.age,
    middleDeveloper.position
);

console.log(
    seniorDeveloper.fullName,
    seniorDeveloper.age,
    seniorDeveloper.position
);
