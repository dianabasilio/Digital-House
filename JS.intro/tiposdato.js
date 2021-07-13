//Dato de tipo num
let edad = 33;

console.log(edad);
//string

let nombre =' Diana'

console.log(nombre);

//bool

let verdadero = true;

console.log(verdadero);

//NaN not a numer 'a'*2 = Nan
// Null dato desconocido, cuando no sabemos cuánto vale
//Undefined let hogar; --> si la mandamos llamar será undefinded

//Objeto literal--> como diccionario en python

let miComputadora = {
    marca: 'Macbook Pro',
    modelo: 2017,
    estaEncendida: true

};

//Array agrupa varios datos en una sola variable, se dif de oL no tiene claves, si no que tiene índices
//numéricos que comienzan en el cero

let letras = ['a','b']
console.log(letras[0]);

//Para convertir un string a numero por ejemplo '8' a numero se usa Number('8')

var convertirANumero= Number('7')
console.log(convertirANumero);

//Para solo devolver el número entero (NO REDONDEA) usamos parseInt()
var convertirANumero2= parseInt('9.87');
console.log(convertirANumero2);