let autos = require('./autos');

const concesionaria = {
    /* completar */

   autos: autos,

   //Busca la patente y da el auto si lo encuentra si no null
   //Recibe de parámetro el nombre de la patente
   buscarAuto: function(nombrePatente){
       //find pone una condición
    let autoEncontrado = this.autos.find(auto => auto.patente == nombrePatente);
    return autoEncontrado !== undefined? autoEncontrado: null
 },

    venderAuto: function (nombrePatente){
            let indiceAuto = this.autos.indexOf(this.buscarAuto(nombrePatente));
            if (indiceAuto >= 0){
            autos[indiceAuto].vendido = true;
            }
            return autos[indiceAuto].vendido
        },
    
    autosParaLaVenta: function(){
           let autosDisponibles = this.autos.filter ( auto => !auto.vendido)
           return autosDisponibles;
        },
    autosNuevos: function(){
        return this.autosParaLaVenta().filter( auto => auto.km < 10)
    },
    listaDeVentas: function(){
        let autosVendidos = this.autos.filter ( auto => auto.vendido)
        let arrayPrecios = []
        for (let i =0; i < autosVendidos.length; i++){
            arrayPrecios.push(autosVendidos[i].precio)
            }
        return arrayPrecios

        //return  arrayPrecios.reduce(function(estado, numero){
           // return estado+numero;
        //})
        },
    totalDeVentas: function(){
        

         if (this.listaDeVentas().length > 0){
            return this.listaDeVentas().reduce(function(estado, numero){
                return estado+numero;
             })
         }

        //En caso de que no haya ventas
         else {
             return 0
         }
    },
    puedeComprar: function(auto,persona){
        return (auto.precio <= persona.capacidadDePagoTotal) &&
        auto.precio/auto.cuotas <= persona.capacidadDePagoEnCuotas;
    },
    autosQuePuedeComprar: function(persona){
        let listaAutosQuePuedeComprar = [];
        let autosNoVendidos = this.autosParaLaVenta();
        for (let i =0; i < autosNoVendidos.length; i++){
            if (this.puedeComprar(autosNoVendidos[i],persona)){
                listaAutosQuePuedeComprar.push(autosNoVendidos[i])

            }

        }
        return listaAutosQuePuedeComprar;

    }
     
};

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
    }
console.log(" Buscar Auto  ")
console.log(concesionaria.buscarAuto("APL123"));
console.log("    .   ")
console.log(" Vender Auto ")
//console.log(concesionaria.venderAuto("APL123"));
console.log("     . ")
console.log(" Autos Disponibles ")
console.log(concesionaria.autosParaLaVenta());
console.log("    .  ")
console.log(" Autos Nuevos ")
console.log(concesionaria.autosNuevos());
console.log(" lista de ventas ")
console.log(concesionaria.listaDeVentas());
console.log(" Suma de ventas ")
console.log(concesionaria.totalDeVentas());
console.log(" Puede comprar ")
console.log(concesionaria.puedeComprar("JJK116", persona))
console.log(" autosQuePuedeComprar")
console.log(concesionaria.autosQuePuedeComprar(persona));

//console.log(autos.filter ( auto => !auto.vendido))

//Ejemplo de find
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

//console.log(found);