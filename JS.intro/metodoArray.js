let letras = ['b','h', 'c']
//push pone al final
letras.push('k')

console.log(letras) ;

//shift() sacara el elemento en el indice 0

let primero = letras.shift()
console.log(primero) ;


console.log(letras) ;
//unshift() inserta datos al principio

letras.unshift('primero','primero2');
console.log(letras) ;

//quita el final
let last = letras.pop()
console.log(last) ;
console.log(letras) ;

//idexOf() nos da el indice de un valor en un array, si no hay da -1

console.log(letras.indexOf('h'));

//lastIndexOf() --lo mismo que el anterior pero va hacia atrás
console.log(letras.lastIndexOf('h'));


//join() para unir los datos de un array separados por coma

console.log(letras.join()) ;

//para separarlo con otra cosa
console.log(letras.join("-")) ;


let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  
  estudiantes.unshift({nombre: "Mariana",

  promedio: 9,
  
  curso: "Full Stack"}, {nombre: "Francisco",
  
  promedio: 2,
  
  curso: "Android"})

  console.log(estudiantes);

