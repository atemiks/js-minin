const getDateFormat = (date, separator = '.') => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const dateArray = [day, month + 1, year].map((element) => {
        return String(element).length === 1 ? `0${element}` : element;
    });

    return dateArray.join(separator);
};

const result = getDateFormat(new Date(), '/');
console.log(result);
