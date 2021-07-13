let fruta = 'Manzana'

let resultado = fruta == 'Manzana' ? 'Buena': 'no quiero'

console.log(resultado)

console.log(fruta)

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande =bicicletaA.rodado > bicicletaB.rodado? bicicletaA: bicicletaB ;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

let semaforo = 'Verde'

switch (semaforo) {
    case 'Verde':
        console.log("Pasa");
        break;
    
    case 'Amarillo':
        console.log("Precaucion");
        break;
    
    case 'Rojo':
        console.log("Para");
        break;

    default:
        console.log("No funciona")
        break;
}

4>10 ? '4': '10'


let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}



function finDeSemana (dia) {
	switch  (dia) {
	case 'viernes' :
		console.log('buen finde');
		break;

	case 'lunes' :
		console.log('buena semana');
		break;

	default:
		console.log('buen dia')


}

}


function tengoClases(dia) {
	switch (dia) {
    	//Escribe tu código aquí
		case 'lunes' :
		case 'miércoles':
		case 'viernes':
			console.log("tenés clases");
			break;

		default:
			console.log("no tenés clases");
	}
}

tengoClases('lunes')