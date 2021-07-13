//length

let mensaje = 'Gran día para salir'
console.log(mensaje.length);

let arrayNombres=["Joan", "Karen"]
console.log(arrayNombres[0].length);
//indexOf()
console.log(mensaje.indexOf("día"));
//en caso de haber varias devuelve la primera
console.log(mensaje.indexOf("a"));


//slice()
//Si toma el primer parametro
console.log(mensaje.slice(8,12));
console.log(mensaje.slice(10))

//no se modifica el mensaje origial
console.log(mensaje)


//Este mensaje tendrá espacios de más
let mensaje2= "     Hola amigos"
//trim() 
//elimina espacios en blanco al principio de un string
console.log(mensaje2);
console.log(mensaje2.trim());

//split() de string a array
console.log(mensaje.split());
console.log(mensaje.split(" "));


//replace(algo, por algo) remplaza algo por algo
console.log(mensaje.replace("salir", "volar"));
//no lo cambia originalmente
console.log(mensaje)
