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
        const cargo = document.getElementById('cargo').value;
        const contraseña = document.getElementById('contraseña').value;
        const permiso = document.getElementById('permiso').value;
        const horaL = document.getElementById('horaL').value;
        const diasD = document.getElementById('diasD').value;
        const diasH = document.getElementById('diasH').value;
        const fechaC = document.getElementById('fechaC').value;
        const salario = document.getElementById('salario').value;

        // Crea una nueva fila y celdas
        const nuevaFila = tabla.insertRow();
        
        // Crea celdas para los datos
        const celdaTDocumento = nuevaFila.insertCell(0);
        const celdadocumento = nuevaFila.insertCell(1);
        const celdanombre = nuevaFila.insertCell(2);
        const celdaapellido = nuevaFila.insertCell(3);
        const celdacorreo = nuevaFila.insertCell(4);
        const celdatelefonico = nuevaFila.insertCell(5);
        const celdacargo = nuevaFila.insertCell(6);
        const celdacontraseña = nuevaFila.insertCell(7);
        const celdapermiso = nuevaFila.insertCell(8);
        const celdahoraL = nuevaFila.insertCell(9);
        const celdadiasD = nuevaFila.insertCell(10);
        const celdadiasH = nuevaFila.insertCell(11);
        const celdafechaC = nuevaFila.insertCell(12);
        const celdasalario = nuevaFila.insertCell(13);
        

        // Añade el texto a las celdas
        celdaTDocumento.textContent = TDocumento;
        celdadocumento.textContent = documento;
        celdanombre.textContent = nombre;
        celdaapellido.textContent = apellido;
        celdacorreo.textContent = correo;
        celdatelefonico.textContent = telefonico;
        celdacargo.textContent = cargo;
        celdacontraseña.textContent = contraseña;
        celdapermiso.textContent = permiso;
        celdahoraL.textContent = horaL;
        celdadiasD.textContent = diasD;
        celdadiasH.textContent = diasH;
        celdafechaC.textContent = fechaC;
        celdasalario.textContent = salario;

        // Agrega botones de acción
        const celdaAcciones = nuevaFila.insertCell(14);
        celdaAcciones.innerHTML = `
            <a href="#" class="btn btn-sm btn-warning">Editar</a>
            <button class="btn btn-sm btn-danger">Eliminar</button>
        `;

        // Limpia el formulario
        formulario.reset();
    });
});
