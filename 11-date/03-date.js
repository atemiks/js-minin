const convertDaysToMs = (days) => {
    return days * 24 * 60 * 60 * 1000;
};

const addDays = (date, days = 1) => {
    return new Date(Date.now() + convertDaysToMs(days));
};

const newDate = addDays(new Date(), 10);
console.log(newDate);
