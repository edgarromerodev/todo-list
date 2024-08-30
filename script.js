document.addEventListener("DOMContentLoaded", () => {
    const botonAgregar = document.getElementById("addTaskButton")
    botonAgregar.addEventListener("click", agregarTareas)

    function agregarTareas () {

     const mostrarElementosDelUl = document.getElementById("taskList")  
    // recibir los datos del input
    const datosRecibidos = document.getElementById("taskInput").value;
      
    if(datosRecibidos.trim() === "") {
        alert("Por favor ingrese una tarea");
        return;
    }
   
    //texto de tareas;
    const span = document.createElement("span")
    span.textContent = datosRecibidos;    
     
    const li = document.createElement("li")
    
    //crear input tipo checkbox 
    const checkbox = document.createElement("input")
    checkbox.type= "checkbox"
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed")
    })
    //boton para eliminar una tarea 
    const botonEliminar = document.createElement("i")
    botonEliminar.classList.add("fas", "fa-trash")
    botonEliminar.addEventListener("click", () => {
        mostrarElementosDelUl.removeChild(li)
    })

    li.appendChild(checkbox)    
    li.appendChild(span)
    li.appendChild(botonEliminar)   
    mostrarElementosDelUl.appendChild(li) 
    
     document.getElementById("taskInput").value = ""

    }


})