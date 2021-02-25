function getContactos(){
    fetch("http://www.raydelto.org/agenda.php").then(
        function(resultado){
            return resultado.json();
        }
        ).then(
            function(resultado)
            {
                var txtNombre = document.getElementById("txtNombre");
                var txtApellido = document.getElementById("txtApellido");
                var txtTelefono = document.getElementById("txtTelefono");
                txtNombre.innerHTML = resultado[1].nombre;
                txtApellido.innerHTML = resultado[1].apellido;
                txtTelefono.innerHTML = resultado[1].telefono;
            }
        )
}
