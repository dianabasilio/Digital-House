//En JS la hay trufi y falsi
//Falsi: false, 0,-0, "", nul, undefined, NaN
//Trufi son;  todos los demás


//Da true, porque es un string los string son true (trufi), ambos son true
console.log( !! "false" == !!"true");
//También true
console.log(!!"false" === !!"true");

//true
console.log(!false == !false);
//true
console.log(!false == !false);

// [] por si solo es trufi se podría pensar que daría false
//el doble igual lo convierte en valores númericos
//[] a 0 y el lado derecho se queda en true pero el negado lo hace false
// 0 == false;
//da true
console.log([] == ![])

//false
console.log(NaN === NaN)

console.log("b"+"a"+ +'a'+"a")

