

//función costructora es como un molde y empieza siempre con mayusc

function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes=docentes;
    this.horario=horario;
}

let cursoDeProgramacion  = new Curso(70, ["Diana", "Ale"], "19 a 20 hs")

let cursoDeMarketing  = new Curso(20, ["Brandon", "Joan"], "18 a 20 hs")

console.log(cursoDeProgramacion)
console.log(cursoDeMarketing)