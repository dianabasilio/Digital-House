window.addEventListener('load', function() {

    // escribí tu código aquí
    let tituloPelicula =  document.querySelector('h2');
  
  
  });

  //ejemplo2
  window.addEventListener('load', function() {

    // escribí tu código aquí
      let parrafos =  document.querySelectorAll('p');
  
  });


    //ejemplo3
  window.addEventListener('load', function() {

    // escribí tu código aquí
    let  pulpFiction =  document.getElementById('pulp-fiction');
  
  });

  //ejemplo4
  window.addEventListener('load', function() {

    // escribí tu código aquí
    let  barraDeNavegacion =  document.getElementByClassName('nav-bar');
  
  });

//otro
  window.addEventListener('load', function(){

    // ingresa aquí tu código
    let theSubtitle =  document.querySelector('.subtitle');
    
    let paragraphs =  document.querySelectorAll('p');
    
    let navAnchors =  document.querySelectorAll('#main-navbar a');
    
    let mainImage =  document.querySelector('#main-image');
    
    
    
    })


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