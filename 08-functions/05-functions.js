const showSuccessMessage = (message) => {
    console.log(message);
};

const showErrorMessage = (message) => {
    console.error(message);
};

const checkTextOnErrorSymbol = (
    text,
    errorSymbol,
    successCallback,
    errorCallback
) => {
    if (text.includes(errorSymbol)) {
        Array.from(text).forEach((char, index) => {
            if (char === errorSymbol) {
                successCallback(
                    `Найден запрещенный символ "${errorSymbol}" под индексом ${index}`
                );
            }
        });
    }

    if (!text.includes(errorSymbol)) {
        errorCallback('В данном тексте нет запрещенных символов');
    }
};

const text = 'Привет! Как дела? Давно мы с тобой не виделись.';

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
