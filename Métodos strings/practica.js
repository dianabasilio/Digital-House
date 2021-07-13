function menciona(texto, palabra){
    if (texto.indexOf(palabra) === -1){
        return false
    }
    else {
        return true
    }
}

console.log(menciona("hola diana", "diana"))

let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(11)

console.log(licenciada)