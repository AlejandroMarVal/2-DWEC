// 1 Solicite dos números y muestre su suma
// function suma(a, b) {
//     return (a + b);
    
// }

// console.log(suma);

// let num1 = prompt("Dime un número");
// let num2 = prompt("Dime un número");

// let suma = Number(num1) + Number(num2);

// console.log("la suma es", suma);

//--------------------------------------------------------------------------------

// 2 Solicite dos números y muestre el mayor de ellos
// let num1 = Number(prompt("Dime un número"));
// let num2 = Number(prompt("Dime un número"));

// if (isNaN(num1) || isNaN(num2)) {
//     console.log("No son números los 2")
// } else if (num1 > num2) {
//     console.log("el mayor es", num1)
// } else if (num1 < num2) {
//     console.log("el mayor es", num2);
// } else console.log("son iguales");

// if (Math.max(num1,num2));  //me da el mayor

//--------------------------------------------------------------------------------

// 3 Solicite un número y lo divida por 2, por 4 y por 8
// let num1 = Number(prompt("Dime un número"));

// let division2 = (num1 / 2);
// let division4 = (num1 / 4);
// let division8 = (num1 / 8);

// console.log(division2, division4, division8);

//--------------------------------------------------------------------------------

// 4 Solicite un número e indique si es par o impar
// let num1 = Number(prompt("Dime un número"));

// if (num1 % 2 == 0) {
//     console.log("Es par")
// } else console.log("Es impar");

//--------------------------------------------------------------------------------

// 5 Solicite un número y muestre una cuenta atrás
// let num1 = Number(prompt("Dime un número"));

// for (let i = num1; i >= 1; i--) {
//     console.log(i);
// }

//--------------------------------------------------------------------------------

// 6  Solicite tres números y muestre el menor de ellos. Realizar el mismo ejercicio para n números y mostrar el mayor
// let num1 = Number(prompt("Dime un número"));
// let num2 = Number(prompt("Dime un número"));
// let num3 = Number(prompt("Dime un número"));

// if ((num1 < num2 && num2 > num3)) {
//     console.log("El mayor es el segundo,", num2)
// } else if ((num1 > num2 && num1 > num3)) {
//     console.log("El mayor es el primero,", num1)
// } else console.log("El mayor es el tercero,", num3) 
 
// 6.1 Para n números

// let cantidad = Number(prompt("Cuantos números vas a ingresar"));
// let nums = [];

// for (let i = 1; i <= cantidad; i++) {
//     let num = Number(prompt('Ingresa el número ${i}'));
//     nums.push(num)
// }

// let mayor = Math.max(...nums);

// console.log("El número más grande es ", mayor);

//--------------------------------------------------------------------------------

// 7 Solicite tres números y muestre el central, si no hay uno central, debe advertirlo

// let num1 = Number(prompt("Dime el primer número"));
// let num2 = Number(prompt("Dime el segundo número"));
// let num3 = Number(prompt("Dime el tercer número"));

// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     console.log("No son números los 3")
// } else if (num1 > num2 && num1 < num3) {
//     console.log("El mediano es el primero", num1);
// } else if (num2 > num1 && num2 < num3) {
//     console.log("El mediano es el segundo", num2);
// } else if (num3 > num1 && num3 < num2) {
//     console.log("El mediano es el tercero", num3);
// } else console.log("Algún número se repite");


// 8 Solicite cuatro números y los muestre en orden

// let numeros = [];

// for (let i = 1; i <= 4; i++) {
//     let numero = Number(prompt('Ingresa 4 números'))
//     numeros.push(numero);
// }

// numeros.sort(((a,b)=>a-b));

// document.write(numeros);

//--------------------------------------------------------------------------------

//  9. Solicite números al usuario y calcule la media aritmética de todos ellos.  Para
// terminar de introducir números, el usuario introducirá un número negativo. Realizar
// el mismo ejercicio para las medias armónica, cuadrática y geométrica

// let suma = 0;
// let contador = 0;

// while(true) {
//     let numero = Number(prompt("Vete diciendome números, dime uno negativo para terminar"));

//     if (numero < 0) {
//         break;
//     }

//     suma += numero;
//     contador++;
// }

// if (contador > 0) {
//     let media = suma / contador;
//     alert(`La media de los números es ${media}`);
// } else {
//     alert(`No hay números válidos`);
// }

// 9.1 Media armónica

// let suma = 0;
// let contador = 0;

// while(true) {
//     let numero = Number(prompt("Vete diciendome números, dime uno negativo para terminar"));

//     if (numero < 0) {
//         break;
//     }

//     if (numero !== 0) {
//         suma += 1 / numero;
//         contador++;
//     } else { 
//         alert(`El número 0 no es válido`);
//     }
// }

// if (contador > 0) {
//     let media_armonica = contador / suma;
//     alert(`La media armónica es ${media_armonica}`);
// } else {
//     alert(`No has introducido números válidos`);
// }

// 9.2 Media cuadrática

// let suma = 0;
// let contador = 0;

// while(true) {
//     let numero = Number(prompt("Vete diciendome números, dime uno negativo para terminar"));

//     if (numero < 0) {
//         break;
//     }

//     suma += numero * numero;
//     contador++;
// }

// if (contador > 0) {
//     let media_cuadratica = Math.sqrt(suma/contador);
//     alert(`La media cuadrática es ${media_cuadratica}`);
// } else {
//     alert(`No has introducido números válidos`);
// }

// 9.3 Media geométrica

// let producto = 1;
// let contador = 0;

// while(true) {
//     let numero = Number(prompt("Vete diciendome números, dime uno negativo para terminar"));

//     if (numero < 0) {
//         break;
//     }

//     producto *= numero;
//     contador++;
// }

// if (contador > 0) {
//     let media_geometrica = Math.pow(producto, 1 / contador);
//     alert(`La media geométrica es ${media_geometrica}`);
// } else {
//     alert(`No has introducido números válidos`);
// }

//--------------------------------------------------------------------------------

// 10. Solicite números enteros al usuario. Para terminar de introducir números, el usuario
// introducirá el cero. A continuación se mostrará un sencillo histograma: El número de
// positivos y el número de negativos usando asteriscos (uno para cada ocurrencia)

// let positivos = 0;
// let negativos = 0;

// while (true) {
//    let numero = Number(prompt("Dime números, introduce 0 para terminar"));

//    if (numero === 0) {
//     break;
//    }

//    if (numero > 0) {
//     positivos++
//    } else {
//     negativos++
//    }
// }

// let numspositivos = "*".repeat(positivos);
// let numsnegativos = "*".repeat(negativos);

// alert(`Positivos (${positivos}): ${numspositivos}\nNegativos (${negativos}): ${numsnegativos}`);

//--------------------------------------------------------------------------------

//  11. Solicite la estatura y el peso del usuario y, basándose en el cálculo de su IMC le informe de su estado nutricional

// let estatura = Number(prompt("Dime tu estatura en metros"));
// let peso = Number(prompt("Dime tu peso kg"));

// let estatura_imc = estatura*estatura;

// let imc = peso/estatura_imc;

// alert(imc);

//  12. Solicite un número al usuario y muestre la suma de todos los números naturales desde el 1 hasta el número introducido

// let num = Number(prompt("Dime un número"));
// let suma = 0;

// for (let i = 0; i <= num; i++) {
//     suma +=i ;
    
// }
// alert(suma);

//--------------------------------------------------------------------------------

//  13. Solicite dos números al usuario y muestre la suma de todos los números naturales entre ellos incluyendo ambos

// let num1 = Number(prompt("Dime un número"));
// let num2 = Number(prompt("Dime otro número"));

// let resta = num2-num1;

// let suma = 0;

// if (isNaN(num1 && num2)) {
//     alert("No son múmeros")
// }
// for (let i = num1; i <= num2; i++) {
//     suma += i;
// }
// alert(suma);

//--------------------------------------------------------------------------------

//  14. Solicite una hora del día al usuario entre las 0 y las 11 y un número de horas. 
//      Se mostrará que hora indicará el reloj pasadas ese número de horas


// let hora1 = Number(prompt("Dime una hora entre las 0 y las 11"));
// let hora2 = Number(prompt("Dime otra hora"));

// if (hora2 > hora1) {
//     alert(hora2-hora1);
// } else {
//     alert(24 - hora1 + hora2);
// }

//--------------------------------------------------------------------------------

// 15. Solicite un número al usuario y muestre todos sus múltiplos del 0 al 100

// let num = Number(prompt("Dime un número"));
// let limite = 100;

// for (let i = 0; i <= 100; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

//--------------------------------------------------------------------------------

//  16. Solicite un número y muestre el número de dígitos que lo forman

// let num = Number(prompt("Dime un número y te diré que dígitos lo forman"));

// if (isNaN(num)) {
//     alert ("No es un número");

// } else {

//     let numStr = num.toString();
//     let cifras = numStr.length;

//     console.log(`El número tiene ${cifras} cifras`); 
// }

// OTRA OPCIÓN DANDO QUE NÚMEROS LO FORMAN

// let num = Number(prompt("Dime un número y te diré que dígitos lo forman"));

// if (isNaN(num)) {
//     alert ("No es un número");

// } else {

//     let numStr = Array.from(String(num));

//     alert(`El número ${num} está formado por los dígitos: ${numStr.join(", ")}`);
// }

//--------------------------------------------------------------------------------

//  17. Solicite un número y muestre sus dígitos invertidos

// let num = Number(prompt("Dime un número y te lo diré al revés"));

//     if (!isNaN(num)) {
//         let numStr = String(num);
//         let numInvertido = numStr.split("").reverse().join(""); 
//         alert(`El número invertido es ${numInvertido}`);
//     } else {
//         alert("No es un número válido");
//     }

    // split divide la cadena creando un array a partir de una cadena de caracteres
    // reverse se aplica a los arrays y sirve para invertir el orden
    // join se aplica a los arrays y sirve para unir los elementos

//--------------------------------------------------------------------------------

//  18. Solicite un importe e indique el importe con IVA

// let num = Number(prompt("Dime un número y te lo indico con el IVA"));
// let IVA = 1.21;

// let precioIVA = num * IVA;

// alert(`El precio con IVA es ${precioIVA}`);

//--------------------------------------------------------------------------------

//  19. Solicite un importe con IVA y lo indique sin IVA

// let num = Number(prompt("Dime un precio con IVA y te digo cuanto es sin este"));
// let IVA = 1.21;

// let precioSinIVA = num/IVA;

// alert(`El precio sin IVA es ${precioSinIVA.toFixed(2)}`);

//--------------------------------------------------------------------------------

// 20. Solicite un año e indique si es bisiesto o no

function añoBisiesto(anno) {
    if (isNan(anno)) {
        return "no es un número";
    } else if ((anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0)) {
        return "es bisiesto";
    } else {
        return "no es bisiesto";
    }
}

