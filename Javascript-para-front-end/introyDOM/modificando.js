window.addEventListener('load', function() {

    // escribí tu código aquí
    let subtitulo =  document.querySelector('h3').innerText += 'usando código';
  
  
  });

  //ejemplo2
  window.addEventListener('load', function() {

    // escribí tu código aquí
    let subtitulo =  document.querySelector('body').innerHTML += '<mark>Javascript ROCKS</mark>';
  
  });

  //ejemplo3 (ESTILOS)
  window.addEventListener('load', function() {

    // escribí tu código aquí
    document.querySelector('body').style.backgroundColor = 'lightskyblue';
    document.querySelector('h2').style.textAlign = 'center';
    document.querySelector('h4').style.fontStyle = 'italic';
    
  
  });

  //Recordemos el querySelectorAll(). Este método nos devolvía algo similar a un array..

  window.addEventListener('load', function() {

    // escribí tu código aquí 
    let libros =document.querySelectorAll('li')
        
    for(let libro of libros) {
      // escribí tu código aquí 
      libro.style.color = 'orange';
      
    }
    
    });

    //ejemplo5 CLASES
window.addEventListener('load', function() {

// escribí tu código aquí
document.querySelector('div').classList.add('container');

});
//ejemplo6 CLASES

window.addEventListener('load', function() {

// escribí tu código aquí
document.querySelector('h1').classList.remove('titulo');

});
//ejemplo7 CLASES
window.addEventListener('load', function() {

// escribí tu código aquí
document.querySelector('h1').classList.toggle('titulo-tuneado');

});

//otro

window.addEventListener('load', function(){

  // Ingresa aqui tu codigo
 let horrorOrtografico =  document.querySelector('.title');horrorOrtografico.innerHTML = 'Bienvenidos a mi <em>sitio web</em>';

})



// ingresa aquí tu código
const listItems = document.querySelectorAll(' #cont01');
 
for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].classList.contains('.alert-danger')) {
     listItems[i].add('.alert-danger');
     listItems[i].remove('.alert-success');
  }
}
