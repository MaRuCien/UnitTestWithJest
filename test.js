//Para iniciar la prueba test y el nombre (puede ser cualquiera):
test("One euro should be 1.206 dollars", function(){
    // Nombre de la función y el archivo de donde se importará:
    const { fromEuroToDollar } = require('./app.js')
    // La prueba:
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
    //1 euro son 1.2 dólares, entonces 3.5*1.2 euros deberian ser = 4.2
})

test("Dollar to Yen test", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1.0)).toBe(106.583);
    //Valores declarados en oneEuroIs: JPY 127.9/1.2USD = 106.583*1.0USD = 106.583JPY
})

test("Yen to GBP test", function(){
    const { fromYenToPound } = require('./app.js')  
    expect(fromYenToPound(1000)).toBe(6);
    //Valores declarados en oneEuroIs: GBP 0.8/127.9JPY = 0.006*1.000JPY = 6GBP
})