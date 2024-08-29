document.addEventListener("DOMContentLoaded", () => {
    const botonAgregar = document.getElementById("addTaskButton");
    botonAgregar.addEventListener("click", agregarTarea);

    function agregarTarea() {
        const datosRecibidos = document.getElementById("taskInput").value;
        if (datosRecibidos.trim() === "") {
            alert("Por favor ingresa algunas tareas");
            return;
        }

        const crearLi = document.createElement("li");

        // Checkbox redondo para marcar tareas completadas
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            crearLi.classList.toggle("completed");
        });

        // Texto de la tarea
        const crearSpan = document.createElement("span");
        crearSpan.textContent = datosRecibidos;

        // Botón para eliminar una tarea
        const botonEliminar = document.createElement("i");
        botonEliminar.classList.add("fas", "fa-trash");
        botonEliminar.addEventListener("click", () => {
            document.getElementById("taskList").removeChild(crearLi);
        });

        // Añadir ítems al li
        crearLi.appendChild(checkbox);
        crearLi.appendChild(crearSpan);
        crearLi.appendChild(botonEliminar);

        // Añadir el li a la lista
        document.getElementById("taskList").appendChild(crearLi);

        // Limpiar el campo de texto
        document.getElementById("taskInput").value = "";
    }
});