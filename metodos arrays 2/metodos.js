let notas = [10,4,5,8,9,2,7];

//Map()
//Map recibe una función como parámetro,
//DEVUELVE ARRAY
//map() devuelve un nuevo array que hace lo que diga la función
//Devolvera un array que multiplica cada num por 10 en el array.
//Numero es como el numero dentro del array
let notasHastaEl100= notas.map(function(numero){
    return numero*10;

})

console.log(notasHastaEl100);

//Ejemplo 2
//restarle 1 a cada num
let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(
    function(numero){
        return numero-1;

})

//FILTER()
//DEVUELVE ARRAY
//Vamos a filtras las notas por las que haya pasado
//Filter devuelve un array que cumpla la condición

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
})

console.log(notasAprobadas);

//ejemplo 2 filter
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado == true
})

let desaprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado != true
})

//Reduce(), la función que tiene dentro 
//necesita de 2 parámetros
//Si quisieramos la suma de las notas
//DEVUELVE numero 
//Estado es como el acumulado,  valdrá 0 primero.
//Num es el actual
let sumaNotas = notas.reduce(function(estado, numero){
    return estado+numero;
})

console.log(sumaNotas);

//ejemplo 2
let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(acumulado, numero){
    return acumulado+numero;
})

//Ejemplo 3
function sumar(...numeros) {
    // Sabiendo que números es ahora un array utilizamos
    // el método reduce para obtener la sumatoria
    return numeros.reduce((acum, num) => acum += num);
   }
sumar(1, 4); // devuelve 5
sumar(13, 6, 8, 12, 23, 37); // devuelve 99

//forEach(), recibe una fución de parametro igual
//Para realizar una operación por cada num en el array
//NO DEVUELVE UN ARRAY
notas.forEach(function(valor, indice){
    console.log(indice);//En el indice 0 tengo e l valor..
    console.log(valor);//Valor 10
})

notas.forEach(function(valor, indice){
    console.log("En la posición: "+indice+" tengo el valor: " +valor);
})

//Ejemplo2

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(valor, indice){
    console.log(valor)
})

