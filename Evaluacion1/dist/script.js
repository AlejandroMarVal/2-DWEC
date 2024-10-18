/////////////////////////////////  
//  Setup
//
var APP_DESCRIPTION = "Esta aplicación elimina los espacios duplicados de " +
        "una cadena de caracteres";
var ENTER_STRING_MESSAGE = "Introduzca la cadena de caracteres";
var RESULTING_STRING_MESSAGE = "La cadena resultante es: ";
var FIRST_MESSAGE = APP_DESCRIPTION + "\n" + ENTER_STRING_MESSAGE;

// function suma(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//     return("No son números los 2");

//     } else {
//         return (a + b);
//     }
    
// }

// function tipo(dato) {
//     if (dato=="true" || dato=="false") {
//         return("es booleano");
//     } else 
//         if (!isNaN(dato)) {
//         return("es numérico")
//     } else {
//         return("es una cadena de caracteres")
//     } 
// } 

//--------------------------

// function añoBisiesto(anno) {
//     if (isNaN(anno)) {
//         return "No es un número válido.";
//     }
//     if ((anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0)) {
//         return "El anno " + anno + " es bisiesto.";
//     } else {
//         return "El anno " + anno + " no es bisiesto.";
//     }
// }

/////////////////////////////////  
//  Tests
// 

// describe("Comprueba la suma de a y de b", function () {

//     it("Si sumo 1 + 1 debería dar 2", function () {
//         expect(suma(1 , 1)).toEqual(2);
//     });

//     it("Si sumo un número + una letra debería dar error", function () {
//         expect(suma(1 , "a")).toEqual("No son números los 2");
//     });


// });

    // it("Si le paso `true` me devuelva booleano", function () {
    //     expect(tipo(`true`)).toEqual(`es booleano`);
    // });

    // it("Si le paso `false` me devuelva booleano", function () {
    //     expect(tipo(`false`)).toEqual("es booleano");
    // });

    // it("Si le paso un número me devuelva numérico", function () {
    //     expect(tipo(4)).toEqual(`es numérico`);
    // });

    // it("Si le paso letras me devuelva cadena de caracteres", function () {
    //     expect(tipo("hola")).toEqual("es una cadena de caracteres");
    // });

    //--------------------------

// describe("Comprueba si un año es bisiesto", function () {

//     it("Si le paso letras me devuelva no es bisiesto", function () {
//         expect(añoBisiesto("hola")).toEqual('No es un número válido.');
//     });

//     it("Si le paso un año que al dividir entre 4 de 0 me devuelva  es bisiesto", function () {
//         expect(añoBisiesto(4)).toEqual('El anno 4 es bisiesto.');
//     });

//     it("Si le paso un año que al dividir entre 4 no de 0 me devuelva no es bisiesto", function () {
//         expect(añoBisiesto(5)).toEqual('El anno 5 no es bisiesto.');
//     });

//     it("Si le paso un año que es divisible por 100 pero no por 400 me devuelva no es bisiesto", function () {
//         expect(añoBisiesto(1900)).toEqual('El anno 1900 no es bisiesto.'); // 1900 es divisible por 100 pero no por 400
//     });

//     it("Si le paso un año que es divisible por 400 me devuelva es bisiesto", function () {
//         expect(añoBisiesto(2000)).toEqual('El anno 2000 es bisiesto.'); // 2000 es divisible por 400
//     });

//     it("Si le paso un año que es divisible por 400 me devuelva es bisiesto", function () {
//         expect(añoBisiesto(1600)).toEqual('El anno 1600 es bisiesto.'); // 1600 es divisible por 400
//     });

//     it("Si le paso un año que no es bisiesto me devuelva no es bisiesto", function () {
//         expect(añoBisiesto(2019)).toEqual('El anno 2019 no es bisiesto.'); // 2019 no es bisiesto
//     });

    //--------------------------


    // it("Should return the correct spaces for a more complex word", function () {
    //     expect(trim(" El   veloz murciélago   hindú comía   feliz   cardillo y kiwi    "))
    //     .toEqual("El veloz murciélago hindú comía feliz cardillo y kiwi");
    // });

});