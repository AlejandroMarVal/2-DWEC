/////////////////////////////////  
//  Setup
//
var APP_DESCRIPTION = "Esta aplicación elimina los espacios duplicados de " +
        "una cadena de caracteres";
var ENTER_STRING_MESSAGE = "Introduzca la cadena de caracteres";
var RESULTING_STRING_MESSAGE = "La cadena resultante es: ";
var FIRST_MESSAGE = APP_DESCRIPTION + "\n" + ENTER_STRING_MESSAGE;

function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
    return("No son números los 2");

    } else {
        return (a + b);
    }
    
}

function tipo(dato) {
    if (dato=="true" || dato=="false") {
        return("es booleano");
    } else 
        if (!isNaN(dato)) {
        return("es numérico")
    } else {
        return("es una cadena de caracteres")
    } 
} 
/////////////////////////////////  
//  Tests
// 

describe("Comprueba la suma de a y de b", function () {

    it("Si sumo 1 + 1 debería dar 2", function () {
        expect(suma(1 , 1)).toEqual(2);
    });

    it("Si sumo un número + una letra debería dar error", function () {
        expect(suma(1 , "a")).toEqual("No son números los 2");
    });


});
describe("Comprueba que tipo de dato le pasa y te dice de que tipo es", function () {

    it("Si le paso `true` me devuelva booleano", function () {
        expect(tipo(`true`)).toEqual(`es booleano`);
    });

    it("Si le paso `false` me devuelva booleano", function () {
        expect(tipo(`false`)).toEqual("es booleano");
    });

    it("Si le paso un número me devuelva numérico", function () {
        expect(tipo(4)).toEqual(`es numérico`);
    });

    it("Si le paso letras me devuelva cadena de caracteres", function () {
        expect(tipo("hola")).toEqual("es una cadena de caracteres");
    });

    

    // it("Should return the correct spaces for a more complex word", function () {
    //     expect(trim(" El   veloz murciélago   hindú comía   feliz   cardillo y kiwi    "))
    //     .toEqual("El veloz murciélago hindú comía feliz cardillo y kiwi");
    // });

});