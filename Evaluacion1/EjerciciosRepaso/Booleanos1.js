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

