//Ejercicio #1
window.addEventListener('load', function(){
    let elNombre=document.querySelector("#nombre");
    
    elNombre.addEventListener('focus',()=>{
      elNombre.style.backgroundColor  = "pink";
    });
    // Escribe tu codigo aquí
    
    })


//Ejercicio #2
window.addEventListener('load', function(){
    let elUsuario=document.querySelector("#user");
    
    elUsuario.addEventListener('blur',()=>{
        elUsuario.style.backgroundColor  = "plum";
    });
    // Escribe tu codigo aquí
    })


//Ejercicio #3
window.addEventListener('load', function(){
    let miInput=document.querySelector("#miInput");
    
    miInput.addEventListener('change',()=>{
      document.body.style.backgroundColor  = "red";
    });
    // Escribe tu codigo aquí
    
    })

//Ejercicio #4
window.addEventListener('load', function(){
    let miForm=document.querySelector("#miForm");
    let mensajeOculto=document.querySelector("h1");
    
    miForm.addEventListener('submit',()=>{
        miForm.style.display  = "none";
        mensajeOculto.style.display  = "block";
    });
    // Escribe tu codigo aquí
    
    })