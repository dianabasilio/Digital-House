//Son funciones que da el lenguaje con optimaciones 

// Función convencional 

function sumar(n1,n2) {
    return n1 + n2
  }
  
// Arrow function

let sumar2 = (n1,n2) => n1 + n2


// no se necesitan parentesis si solo es un parametro
//NECESITA QUE TENER VARIABLE ASIGNADA

let elDoble = num => num*2;

// las llamas igual que una funcion tradicional

let laMitad = num => num/2;

console.log(laMitad(5))

let dividir = (numeroA, numeroB) => numeroA /numeroB;

console.log(dividir(20,4))

//Algo más complejo

let tengoQueTrabajar = dia => {
    if (dia == "Sábado" || dia == "Domingo")
    {
        return "No tienes que trabajar"
    }
    else {
        return "Sí tienes que trabajar"
    }
}

console.log(tengoQueTrabajar("Domingo"))

//Si no necesita parametros 

let saludo = () => "Hola mundo"

console.log(saludo())