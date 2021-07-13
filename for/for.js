for (let i = 20; i >10 ; i-- ){
    console.log("valor i: " + i)
}

//La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.
let loro = (texto) => {
    for (let i =0; i <=4 ; i++){
        console.log(texto)

    }
}

function noParesDeContarImparesHasta(numero){
    let a = 0;
    // Escribe aqui tu código
    for (let i = 0; i<= numero; i++){
        if (i%2 === 1){
            a = a+1
        }
    } 
    return a
}

console.log(noParesDeContarImparesHasta(4))

if (2%2 === 1){
    console.log("hi")

}