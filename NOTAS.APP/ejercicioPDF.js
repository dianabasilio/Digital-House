let variable = process.argv[2];

switch (variable){
    case 'listar':
        console.log(datosObjetoLiteral);
        break;
    case undefined:
        console.log("¡Atención! Tienes que pasar una acción")
        break;
    default:
        console.log("No entiendo qué quieres hacer");
}