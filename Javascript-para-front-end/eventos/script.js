window.addEventListener('load', function(event){

});

//ejemplo2
window.addEventListener('load', function() {

    let linkContacto = document.querySelector('.contacto');
      
    // escribí tu código aquí
  linkContacto.addEventListener('click', function(event){
   console.log('hiciste click');
  
  });
  
  });
  window.addEventListener('load', function() {

    // escribí tu código aquí
   let formulario= document.querySelector("form");
  
    formulario.addEventListener('submit', function(evento){
  
   evento.preventDefault();
  });
  
  });

  //ejemplo4
  //Cuando el usuario pase el mouse por encima de ese <h1>,
  // se le debe agregar la clase "titulo", definida en el CSS.
  window.addEventListener('load', function() {

    //  escribí tu código aquí
  let titulo = document.querySelector('h1');
  
  titulo.addEventListener('mouseover', function(){
  titulo.classList.add('titulo');
  });
  
  });


//Capturar todas las etiquetas <a> y almacenarlas en la variable links.
//Usando addEventListener(), le asignes a cada link el evento "mouseout".
  //ejemplo5
  window.addEventListener('load', function() {

    // escribí tu solución aquí
    let links =  document.querySelectorAll('a');
  
    for(let link of links) {
      // escribí tu solución aquí
        
    link.addEventListener('mouseout', function(){
    this.classList.toggle('dark-mode');
    });
    }
  
  });

//ejemplo6
//Capturar el input del usuario que tiene como id userName.

//Haciendo uso del evento “keydown”, queremos que, en el caso de que el 
//valor de la tecla presionada sea “#”, se dispare un alert con el siguiente mensaje
window.addEventListener('load', function() {
  // escribí tu codigo acá
 let userName = document.querySelector('#userName'); 
    userName.addEventListener('keydown', function(event){
        //???
        if(event.key =='#'){
            alert('Está prohibido el uso de #hashtags!')
        }
    })
});


//Cuando usamos el método .addEventListener(), 
//los nombres de los eventos van en minúscula y sin el prefijo "on"
//ejemplo 7
window.addEventListener('load', function(){

  //escribí tu código acá
   let direccion = document.querySelector('#address'); 

  direccion.addEventListener('keypress', function(event){
       alert("Se presionó la tecla: "+ event.key);
  })

})

//ejemplo 8
//Tenemos un enlace <a> dentro del HTML que en su atributo href tiene una URL 
//a la que no queremos acceder. Por lo tanto, queremos que al dar clic sobre ese 
//enlace evitemos ir a dicha URL y que, además, se cambie el color del texto de negro a rojo. 
//Ah, y también queremos que el texto del enlace diga: "este enlace no te llevará a ningún lado".


window.addEventListener('load', function(){
  const specialAnchor = document.querySelector("a");   
  specialAnchor.addEventListener('click', (event) => {
    event.preventDefault()
    this.style.color = "red"  
    this.innerText = "este enlace no te llevará a ningún lado"
  })
})