window.addEventListener('load', function() {

    // escribí tu código aquí
     let  formulario = document.querySelector('form');
     formulario.addEventListener("submit", function(evento){
       evento.preventDefault();
     });
  
  });
//ejemplo2
  window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    let nombre = document.querySelector('#nombre');
    let password = document.querySelector('#password');
    formulario.addEventListener('submit', function(evento) {
  
      evento.preventDefault();
  
      // escribí tu código aquí
      if (password.value.length < 4){
  console.log( 'Hubo un error en el password');
      }
      if(nombre.value.length < 1){
        console.log('Hubo un error en el nombre');
  
      }
  
    })
  });