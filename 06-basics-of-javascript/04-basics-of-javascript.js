// цикл for
for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
    }
}

// цикл while
// let i = 0;
// while (i < 3) {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
//     i++;
// }

// цикл do while
// let i = 0;
// do {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
//     i++;
// } while (i < 3);
