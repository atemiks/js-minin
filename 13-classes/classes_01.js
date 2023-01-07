/**
 * Переписать данную функцию на класс (class).
 * */

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//     this.setTechnologies = function (technologies) {
//         this.technologies = [...this.technologies, ...technologies];
//     };
//     this.setNewStatus = function (newStatus) {
//         this.status = newStatus;
//     };
// }

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.technologies = [];
        this.status = 'Junior';
    }

    setTechnologies(technologies) {
        return (this.technologies = technologies);
    }

    setNewStatus(newStatus) {
        return (this.status = newStatus);
    }
}

const student = new Student('Artem', '26');
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('Junior');
console.log(student);
