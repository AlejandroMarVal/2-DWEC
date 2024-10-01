let dato = prompt("Ingrese un dato");
if (dato=="true" || dato=="false") {
    console.log("es booleano");
} else 
    if (!isNaN(dato)) {
    console.log("es numérico")
} else  {
    console.log("es una cadena de caracteres")
} 
