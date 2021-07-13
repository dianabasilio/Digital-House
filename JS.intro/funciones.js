//funciones declaradas se cargan antes de que cualquier código sea ejecutado
//Fucion expresada cuando el interprete alcanza la linea



//funcion expresada

let sumar2 = function(a,b){
    return a+b+4
}
console.log(sumar2('bu', 'be'))

//funcion declarada
function sumar (a,b){
    return a+b;
}

console.log(sumar('hola', 'bye'))


//SCOPE alcance que tiene una variable

//scope global
let mensaje = 'Hola';

function saludar(){
    //scope local
    var mensaje= 'Chau'
    return mensaje;
}

console.log(mensaje);

//local tiene predominancia sobre un global
console.log(saludar());


//otra global

let saludo = 'Hola que onda';

function hola() {
    return saludo;
}

console.log(hola())