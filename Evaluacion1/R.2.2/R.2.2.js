// 1.- Comprobar si un número es positivo, negativo o cero

// let num = Number(prompt("Dime un número"));

// if (isNaN(num)) {
//     alert ("No es un número");
// } else if (num > 0) {
//     alert("Es positivo");
// } else if (num === 0) {
//     alert("Es cero");
// } else alert("Es negativo");


// 2- Determinar cuántas cifras tiene un número entre 0 y 999

// let num = Number(prompt("Dime un número del 0 al 999"));
// if (isNaN(num)) {
//     alert ("No es un número");

// } else if (num >= 0 && num <= 999) {
    
//     let numStr = num.toString();
//     let cifras = numStr.length;
    
//     alert (`El número tiene ${cifras} cifras`);

// } else { alert('Algo salió mal'); }


// 3.- Calificación basada en una nota usando switch

// let nota = Number(prompt("Dime una nota entre 0 a 10"));

// switch (true) {
//     case (nota >= 0 && nota <= 4):
//         alert("Insuficiente");
//         break;
//     case (nota === 5):
//         alert("Suficiente");
//         break;
//     case (nota === 6):
//         alert("Bien");
//         break;
//     case (nota >= 7 && nota <= 8):
//         alert("Notable");
//         break;
//     case (nota >= 9 && nota <= 10):
//         alert("Sobresaliente");
//         break;
//     default:
//         alert ("nota no válida");
// }


// 4.- Uso del operador condicional ?: para el ejercicio de las cifras del número

// let num = Number(prompt("Dime un número"));

// isNaN(num) ? alert ("No es un número") : (num >= 0 && num <= 999) 
//     ? alert(`El número tiene ${num.toString().length} cifras`) : alert("Algo salió mal");


// 5.- Comprobar si un usuario puede descargar un juego con PEGI 18

// let nombre = String(prompt("Dime el nombre"));
// let edad = Number(prompt("Dime una edad"));

// if (edad >= 18) {
//     document.write (`Te llamas ${nombre}, tienes ${edad}. Eres mayor de edad. Puedes descargarte el juego`);
// } else { (edad < 18); 
//     let permiso = window.confirm("Tienes permiso paterno");

//     if (permiso) {
//         document.write(`Te llamas ${nombre}, tienes ${edad}. Eres menor de edad. Tienes permiso paterno. Puedes descargarte el juego`);

//     } else {
//         document.write(`Te llamas ${nombre}, tienes ${edad}. Eres menor de edad. NO puedes descargarte el juego`)
//     }
// }