const convertMsToDays = (ms) => {
    return Math.round(ms / 1000 / 60 / 60 / 24);
};

const getDaysBeforeBirthday = (
    nextBirthdayDate,
    convertMsToDaysCallback = convertMsToDays
) => {
    const nowTime = new Date().getTime();
    const birthdayTime = nextBirthdayDate.getTime();
    return convertMsToDaysCallback(birthdayTime - nowTime);
};

const myBirthday = new Date('2023-11-08');
const daysBeboreBirthday = getDaysBeforeBirthday(myBirthday);
console.log(daysBeboreBirthday);
