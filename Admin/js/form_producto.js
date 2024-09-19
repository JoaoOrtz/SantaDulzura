document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
    const tabla = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el envío del formulario

        // Obtiene los valores del formulario
        const codhelado = document.getElementById('codhelado').value;
        const nombre = document.getElementById('nombre').value;
        const ingrediente = document.getElementById('ingrediente').value;
        const valor = document.getElementById('valor').value;
        const cantidad = document.getElementById('cantidad').value;

        // Crea una nueva fila y celdas
        const nuevaFila = tabla.insertRow();
        
        // Crea celdas para los datos
        const celdaCodhelado = nuevaFila.insertCell(0);
        const celdaNombre = nuevaFila.insertCell(1);
        const celdaingrediente = nuevaFila.insertCell(2);
        const celdavalor = nuevaFila.insertCell(3);
        const celdacantidad = nuevaFila.insertCell(4);

        // Añade el texto a las celdas
        celdaCodhelado.textContent = codhelado;
        celdaNombre.textContent = nombre;
        celdaingrediente.textContent = ingrediente;
        celdavalor.textContent = valor;
        celdacantidad.textContent = cantidad;

        // Agrega botones de acción
        const celdaAcciones = nuevaFila.insertCell(5);
        celdaAcciones.innerHTML = `
            <a href="#" class="btn btn-sm btn-warning">Editar</a>
            <button class="btn btn-sm btn-danger">Eliminar</button>
        `;

        // Limpia el formulario
        formulario.reset();
    });
});
