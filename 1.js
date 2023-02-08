const celsus = Number.parseFloat(prompt('Введите значение температуры в градусах Цельсия: '));

function tranferToFahrenheit(x) {
    const fahrenheit = parseFloat(((9 / 5) * x + 32).toFixed(2)) ;
    return fahrenheit;
}
alert(`Цельсий: ${celsus}, Фаренгейт: ${tranferToFahrenheit(celsus)}`)