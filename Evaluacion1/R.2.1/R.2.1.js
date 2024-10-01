/* let nombre = prompt("Dime tu nombre");

let edad = Number(prompt("Dime tu edad")); //convertimos la cadena a numero

if (edad < 18) { 
    let annosFaltan = 18 - edad;
    alert("Te llamas " + nombre + " y tienes " + edad + " años. Te faltan " + annosFaltan + " años para ser mayor de edad.");
} else {
    alert("Te llamas " + nombre + " y tienes " + edad + " años.");
} */

let num1 = Number(prompt("Dime un número"));
let num2 = Number(prompt("Dime otro número"));
let num3 = Number(prompt("Dime otro número"));
let num4 = Number(prompt("Dime el último número"));

let suma = num1 + num2 + num3 + num4;
let producto = num1 * num2* num3 * num4;

alert ("La suma de " + num1 + " + " + num2 + " + " + num3 + " + " + num4 + " es " + suma);
alert ("El producto de " + num1 + " * " + num2 + " * " + num3 + " * " + num4 + " es " + producto);