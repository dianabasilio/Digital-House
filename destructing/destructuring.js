let cursos = ["Programación", "MKT","UX","Data Science"];

//con arrays importa el orden
//Le asignará la variable programacion al primer indice
let [programacion,mkt]= cursos;

console.log(programacion);
console.log(mkt);

//Ejemplo 2
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [,bariloche,,china]=destinosDelMundo;



//Con objects literales NO importa el orden
let persona = {
    nombre: "Diana",
    edad: 22,
    domicilio: "Yuriria"
}

let {nombre, domicilio} = persona;
console.log(nombre);
console.log(domicilio);

//Ejemplo 2
let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca, color} = auto;

//Ejemplo3
let persona2 = {nombre: 'Laura', edad: 31, faltas: 3};
//faltas ahora tiene otro nombre totalFaltas
//nombre ahora es nombre2
let {nombre:nombre2, faltas: totalFaltas} = persona2;
console.log(totalFaltas);