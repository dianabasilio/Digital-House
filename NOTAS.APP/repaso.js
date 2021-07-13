// Repaso

// condicionales (if ternario y el switch)

let num1 = 21;

// if(num1 < 20){
//     console.log('<20');
// } else if (num1 >= 20 && num1 < 30){
//     console.log('> 20 y < 30');
// } else {
//     console.log('>=30');
// }

// condicion ? true : false CLASICO
// num1 < 20 ? console.log('<20') : console.log('>=30');

// condicion ? true : false ANIDADO
// num1 < 20 
//     ? console.log('<20') 
//     : num1 >= 20 && num1 < 30 
//         ? console.log('> 20 y < 30') 
//         : console.log('>=30');

//Switch

// switch(num1){
//     case 20:
//         console.log('Este es el numero 20');
//         break;
//     case 21:
//         console.log('Este es el numero 21');
//         break;
//     case 22:
//         console.log('Este es el numero 22');
//         break;
//     default:
//         console.log('No se que numero soy');
// }

//Objetos literales

// const persona = {
//     nombre: 'Gerardo',
//     edad: 23,
//     peso: 80,
//     genero: 'Masculino',
//     altura: 173,
//     nacionalidad: 'Mexicano',
//     respirar: function(){
//         console.log('Estoy respirando');
//     },
//     comer: ()=> {
//         console.log('Estoy respirando');
//     },
//     miArreglo:[],
//     miObjeto: {}
// }

// Arrow functions
// Revisar repaso semana pasada

// Ciclo While
let num2 = 10;
while(num2 > 0){
    // console.log(num2--); //Pos decremento
    console.log(--num2); //Pre decremento
    // --num2; //Pre decremento
    // num2--; //Pos decremento
}