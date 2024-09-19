let codigoCompra = 1;

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('infocompra');
    const tabla = document.getElementById('compra').getElementsByTagName('tbody')[0];

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtiene los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const cantidad = document.getElementById('cantidad').value;
        
        // Crea una nueva fila y celdas
        const nuevaFila = tabla.insertRow();
        
        // Crea celdas para los datos
        const celdaCodigo = nuevaFila.insertCell(0);
        const celdaNombre = nuevaFila.insertCell(1);
        const celdaCantidad = nuevaFila.insertCell(2);

        // Añade el texto a las celdas
        celdaCodigo.textContent = codigoCompra.toString().padStart(6, '0'); // Formato del código (6 dígitos)
        celdaNombre.textContent = nombre;
        celdaCantidad.textContent = cantidad;

        // Agrega botones de acción
        const celdaAcciones = nuevaFila.insertCell(3);
        celdaAcciones.innerHTML = `
            <a href="#" class="btn btn-sm btn-warning">Editar</a>
            <button class="btn btn-sm btn-danger">Eliminar</button>
        `;

        // Incrementa el contador de código de compra
        codigoCompra++;

        // Limpia el formulario
        formulario.reset();
    });
});
