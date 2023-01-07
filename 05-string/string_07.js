const javaScriptDescription =
    'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

let resultJavaSciptDescription = javaScriptDescription.slice(
    0,
    Math.floor(javaScriptDescription.length / 2)
);

resultJavaSciptDescription = resultJavaSciptDescription.replaceAll('a', 'A');
resultJavaSciptDescription = resultJavaSciptDescription.replaceAll(' ', '');
resultJavaSciptDescription = resultJavaSciptDescription.repeat(3);

console.log(
    resultJavaSciptDescription[
        Math.floor(resultJavaSciptDescription.length / 2)
    ]
);

console.log(resultJavaSciptDescription);
