//Camel Case holaVariable
//Snake Case hola_variable
//Kebab Casr hola-variable

//Const buena practica declararla con mayúsculas EDAD_MINIMA

//Variables son espacios de memoria para almacenar datos que se utilizarán después

var telefonoMadre = 8180199306
var nombre = 'Nacho';

//console.log es una herramienta de desarrollo, nos permite mostrar datos en la terminal

console.log(nombre)

//let es para los bloques de ejecución, dentro de llaves.

let numero_preferido = 3;

console.log(numero_preferido);


if(true){
    let numero_preferido = 5;
    console.log(numero_preferido);
}



var edad = 10;
var edad = 11;

console.log(edad);

if (true){
    var nombru= 'Emilia'
}

console.log(nombru)// Todo bien

// const es lo mismo que let solamente que no nos permite cambiar su valor

const apellido = 'Basilio';
console.log(apellido);

//const apellido = 'Cruz'; no nos dejará

if(true){
    apellido = 'Cruz'; // aquí habría error porque  no se puede renombrar
    console.log(apellido);
}



if (true){
    const nombra= 'Juana'
}

console.log(nombra)// aquí error


if (true){
    let nombree= 'Juan'
}

console.log(nombree) // aquí habría un error porque no se puede llamar fuera del bloque

