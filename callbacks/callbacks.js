//Los callbacks se utilizan mucho cuando dependemos de una función para operar otra

let sumar = (num1,num2) => num1+num2;
let restar = (num1,num2)=> num1-num2;
let multiplicar =  (num1,num2)=> num1*num2;
let dividir =  (num1,num2)=> num1/num2;

//Aplicamos el callback operacion va a llamar según lo que se quiera hacer pero SIN paréntesis 

let calculadora = (num1, num2, operacion) => operacion(num1,num2);
//Sumar no ocupa parentesis porque calculadora ya tiene, ya lo esta ejecutando
console.log(calculadora(18,3,sumar));

console.log(calculadora(18,3,restar));

console.log(calculadora(18,3,dividir));


//ejemplo2
let doble = num => num*2;
let triple = num => num*3;

let aplicarCallback = (num, operacion) => operacion(num)


//Ejemplo3

function agregarHttp(url) {
    return "http://"+url
}

function procesar(url,operacion){
    // escribí tu código aquí
    
    
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
    for (let i = 0; i < url.length; i++){
        url[i]=operacion(url[i]);
    }

    return url
}































































