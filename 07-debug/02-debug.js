const temperatureInCelsius = Number(
    prompt('Введите температуру в градусах Цельсия')
);

const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;

if (temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (temperatureInCelsius > 0) {
    alert(
        `${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`
    );
}
