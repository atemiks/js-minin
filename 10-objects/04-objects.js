const giveJobToStudent = (student, jobName) => {
    student.job = jobName;
    console.log(
        `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`
    );
    return student;
};

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};
const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);
