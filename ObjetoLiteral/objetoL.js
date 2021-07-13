let object = {
    cantidadDeAlumnos: 32,
    docentes: ["Nacho", "Javier"],
    horario: "de 19 a 21 hs",
    notificaciones: function (){
        return "El horario de la cursada es: " + this.horario;
    }
}
console.log(object)

console.log("La cantidad de alumnos del curso es de: "+object.cantidadDeAlumnos)

console.log(object.horario)

console.log(object.notificaciones())


//Los objetos tienen métodos, se asignan como clave y van más allá de solo guardar un dato

let miPais = {
    nombre: "Argentina",
    decirNacionalidad: function(){
        return "Yo nací en "+ this.nombre
    },
    decirHola: function(){
        return "Hola "+ miPais.nombre
    }
}

let nacion = miPais.decirNacionalidad()
console.log(nacion)

console.log((miPais.decirHola()))

let autos= [{marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km:200,
    color:"Azul",
    cuotas: 12,
    anio: 2019,
    patente:"APL123",
    vendido: false},{marca: "Toyota",
    modelo: "Corolla",
    precio:100000,
    km:0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente:"JJK116",
    vendido: false}]

module.exports =autos


let concesionaria = {
    autos: autos,
  
    buscarAuto: function(patente){
       if (auto.indexOf(patente)!= -1){
          return auto[auto.indexOf(patente)]
 
       }
    }
 }

//console.log(autos2[1].patente)
console.log(autos[0].patente)