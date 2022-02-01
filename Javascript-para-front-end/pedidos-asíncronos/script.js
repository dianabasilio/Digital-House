fetch('https://api.chucknorris.io/jokes/random')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(informacion){
        console.log(informacion);
    })


window.addEventListener('load', function(){
    //TU CODIGO AQUI
    let id = localStorage.getItem("id")
    let idValue= document.querySelector("#idValue");

    idValue.innerHTML = id;

})


//Nos piden que creemos en sessionStorage un item con el nombre "bgColor" con el valor "red" para que desde 
//otro script puedan cambiar el color del body. Además, nos piden que eliminemos el item "font".
window.addEventListener('load', function(){

    //TU CODIGO AQUI
    //
        localStorage.setItem( "bgColor" , "red");
    //
        localStorage.removeItem("font");
    })

//Queremos que en la etiqueta <h2> se cargue el siguiente texto: "Hola visitante", 
//si es que no hay información del visitante en el almacenamiento local del navegador. O que, en vez de la palabra “visitante”, 
//se muestre el nombre de la persona que está en el almacenamiento local.
// completa el código
window.addEventListener('load', function(){
    const h2 = document.querySelector("h2");
    if(localStorage.getItem( "user")) {
      h2.innerText = "Hola " +localStorage.getItem( "user") ;
    } else {
    h2.innerText = "Hola visitante";
    }
    })
    
//La anterior funcionalidad quedó excelente, pero ahora queremos darle la oportunidad a la persona que nos visita de que sea ella quien almacene sus datos.
//Para ello dispusimos de un botón en nuestro documento que, al hacerle clic, deberá guardar la información del usuario, 
//la cual está almacenada en una variable llamada userInfo (que es un objeto literal) dentro del almacenamiento local, en una propiedad llamada user. 


// completa el código
window.addEventListener('load', function(){
    const button = document.querySelector("button");
    const h2 = document.querySelector("h2");
     
    button.addEventListener("click", function () {
    
      if(!localStorage.getItem("user")) {
         localStorage.setItem("user", JSON.stringify(userInfo))
      }
    })
    });


    window.addEventListener('load', function(){
        // copia y pega el codigo de la etapa 1 aca 
     // declara tus variables aca 
         let form = document.querySelector('#form')
        let email = document.querySelector('#email');
        let emailError= document.querySelector('#emailError');
        let name = document.querySelector('#name');
        let nameError = document.querySelector('#nameError');
        let password = document.querySelector('#password');
        let passwordError = document.querySelector('#passwordError');
        let repassword = document.querySelector('#repassword');
        let repasswordError = document.querySelector('#repasswordError');
        let button = document.querySelector('#button');
            
            button.addEventListener('click', function(event){
                event.preventDefault();
                let errores = {}
                if(name.value.length < 1){
                errores.name = 'Este campo debe estar completo';
                } 
                if(email.value.length < 1){
                errores.email = 'Este campo debe estar completo';
                }
                if(password.value.length < 1){
                errores.password= 'Este campo debe estar completo';
                }
                if(repassword.value.length < 1){
                errores.repassword= 'Este campo debe estar completo';
                }
                if(Object.keys(errores).length >= 1){
                nameError.innerText = (errores.name) ? errores.name : '';
                } else {
                form.submit();
                }
    
                })
    
        
    })