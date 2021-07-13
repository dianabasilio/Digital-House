let amigos = ["Coco", "Pablito", "Sus", "Franco"];

//De Javascript a JSON
let amigosJSON= JSON.stringify(amigos);

//Es un array
console.log(amigos);

//Se convierte en un string
console.log(amigosJSON);

//Lo convierte a su original
//De JSON a array
let amigosOriginal = JSON.parse(amigosJSON);
console.log(amigosOriginal);

let persona = {
    nombre: "Carli",
    edad:  17,
    domicilio: "Calle falsa",
}
console.log(persona)

let personaJSON = JSON.stringify(persona);

console.log(personaJSON);

let personaOrigial = JSON.parse(personaJSON);

console.log(personaOrigial);