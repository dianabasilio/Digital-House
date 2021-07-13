//spread operator para copiar y mover datos demanera eficaz

let peliculasAccion = ["End game", "Civil War", "Star wars"];

let peliculasComedia = ["¿Qué pasó ayer?", "Hola"];

let peliculas = [ peliculasAccion, peliculasComedia];

let peliculas2 = [ ...peliculasAccion, ...peliculasComedia];

console.log(peliculas);

console.log(peliculas2);

let parte = ['los', 'cumplas'];
let oracion = ['Que', ...parte, 'feliz'];


//Si quisieramos poner un objeto dentro de un objeto
let generoComedias = {
    nombreGenero : "Comedia",
    popularidad: 20
}

//Forma incorrecta
let miPobreAngelito = {
    nombre: "Mi pobre angelito",
    duracion: 120,
    generoComedias
}

//Forma correcta de incorporar
let quePasoAyer = {
    nombre: "¿Qué pasó ayer?",
    duracion: 110,
    ...generoComedias
}

console.log(miPobreAngelito);
console.log(quePasoAyer);


//Como no sabemos cuántas películas verá, le ponemos 3 puntos antes, ósea N parámetros
//Lo va a devolver en formato array
function peliculasVistas (...nombreDePeliculas){
    console.log(nombreDePeliculas);
    for(let i =0; i<nombreDePeliculas.length; i++){
        console.log(nombreDePeliculas[i])
    }
    nombreDePeliculas.forEach(function(valor, indice){
        console.log("La persona ya vió "  +valor);
    })

}

peliculasVistas("Iron man", "Capitan America", "holo")


// recibe N cantidad de argumentos y devuelve el menor.
let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas); // Devuelve 3.2


function miFuncion(param1, param2, ...otros) { 
    return otros;
   }
miFuncion('a', 'b', 'c', 'd', 'e');
// retornará ['c', 'd', 'e']


//El parámetro rest se escribe de la misma manera que el operador spread … . 
//La diferencia es que se utiliza durante la definición de la función, y no durante 
//su ejecución.
function sumar(...numeros) {
    // Sabiendo que números es ahora un array utilizamos
    // el método reduce para obtener la sumatoria
    return numeros.reduce((acum, num) => acum += num);
   }
sumar(1, 4); // devuelve 5
sumar(13, 6, 8, 12, 23, 37); // devuelve 99

//siempre debe ser el último parámetro de la función, de lo contrario, 
//recibiremos un error.
function sumar(...numeros, otroParámetro) {
    // Utilizamos el método reduce para obtener la suma
   return numeros.reduce((acum, num) => acum += num);
   }
//SyntaxError: parameter after rest parameter
   