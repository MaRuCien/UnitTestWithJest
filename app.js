// Datos para hacer las funciones:
let oneEuroIs = {
    "JPY": 127.9, // yen
    "USD": 1.2, // US dólar
    "GBP": 0.8, // libra esterlina
}

// Declarar una función con el nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    //Convertir un euro a US dólar
    let valueInDollar = valueInEuro * 1.2;
    // Devuelve el valor en dólar:
    return valueInDollar;
}

//Declarar una función con el nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
//División de los valores de JPY/USD declarados en oneEuroIs redondeadon con .toFixed() a 3 decimales:
    let valueInYen = valueInDollar * (oneEuroIs['JPY']/oneEuroIs['USD']).toFixed(3);
    // Devuelve el valor en yen:
    return valueInYen;
}

//Declarar una función con el nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){
//División de los valores de GBP/JPY declarados en oneEuroIs redondeadon con .toFixed() a 3 decimales:
    let valueInPound = valueInYen * (oneEuroIs['GBP']/oneEuroIs['JPY']).toFixed(3);
    // Devuelve el valor en libra esterlina:
    return valueInPound;
}

// Exportar(module.exports) las funciones para hacer las pruebas(tests) en el archivo test.js: 
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };




