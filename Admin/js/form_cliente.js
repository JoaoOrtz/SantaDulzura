document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
    const tabla = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el envío del formulario

        // Obtiene los valores del formulario
        const TDocumento = document.getElementById('TDocumento').value;
        const documento = document.getElementById('documento').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const telefonico = document.getElementById('telefonico').value;
        const fechaN = document.getElementById('fechaN').value;

        // Crea una nueva fila y celdas
        const nuevaFila = tabla.insertRow();
        
        // Crea celdas para los datos
        const celdaTDocumento = nuevaFila.insertCell(0);
        const celdadocumento = nuevaFila.insertCell(1);
        const celdanombre = nuevaFila.insertCell(2);
        const celdaapellido = nuevaFila.insertCell(3);
        const celdacorreo = nuevaFila.insertCell(4);
        const celdatelefonico = nuevaFila.insertCell(5);
        const celdafechaN = nuevaFila.insertCell(6);

        // Añade el texto a las celdas
        celdaTDocumento.textContent = TDocumento;
        celdadocumento.textContent = documento;
        celdanombre.textContent = nombre;
        celdaapellido.textContent = apellido;
        celdacorreo.textContent = correo;
        celdatelefonico.textContent = telefonico;
        celdafechaN.textContent = fechaN;

        // Agrega botones de acción
        const celdaAcciones = nuevaFila.insertCell(7);
        celdaAcciones.innerHTML = `
            <a href="#" class="btn btn-sm btn-warning">Editar</a>
            <button class="btn btn-sm btn-danger">Eliminar</button>
        `;

        // Limpia el formulario
        formulario.reset();
    });
});
