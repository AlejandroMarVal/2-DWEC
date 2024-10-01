let a = true;
let b = false;

console.log("negación");
console.log(!a); //false
console.log(!b); //true

console.log("conjunción");
console.log(a && b); //false
console.log(a && a); //true

console.log("disyunción");
console.log(a || b); //true
console.log(b || b); //false

console.log("implicación");
console.log(!a || b); //false
console.log(!b || a); //true

console.log("bicondicional");
console.log((a && b) || (!a && !b)); //false
console.log((a && a) || (!b && !b)); //true

console.log("disyunción_exclusiva");
console.log(a !== b); //true
console.log(a === a); //true

console.log("negación_de_la_disyunción_exclusiva");
console.log(!(a !== b)); //false
console.log(!(a === a)); //false