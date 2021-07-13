let fechaActual = new Date();

console.log(fechaActual);

//lo pasa a mas bonito
console.log(fechaActual.toUTCString());

//da el año 
console.log(fechaActual.getFullYear());

//mes comienza a contar desde 0, enero=0
console.log(fechaActual.getMonth());

//getday(), empieza en domingo
//Domingo = 0
console.log(fechaActual.getDay());

//getDate()
//Para saber el numero del dia del mes
console.log(fechaActual.getDate());

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre"
,"Octubre","Noviembre", "Diciembre"]

console.log("Hoy es el " + dia+" de "+meses[mes]+ " del " +anio)


//poner otra fecha
let fechaPuntual= new Date(1999,3,18);
