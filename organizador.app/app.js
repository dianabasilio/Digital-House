const fs=require('fs');


let tareas = fs.readFileSync(__dirname+'/tareas.json', 'utf-8');

console.log(tareas)

let tareasArray= JSON.parse(tareas)

console.log(tareasArray)

for ( let i = 0; i<tareasArray.length; i++ ){
    if (tareasArray[i].status === "Pendiente"){
        console.log(tareasArray[i].titulo)
        
        
    }

}
    

console.log(tareasArray[0].titulo)

//tareas.forEach(tarea => {
    //if (tarea.status==="Pendiente")
    //{
      //console.log(tarea.title);
   // }
//});

