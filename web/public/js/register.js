window.addEventListener("load", function () {
    let formRegistro = document.querySelector("#formRegistro");
    let nombre = document.querySelector("#nombre");
    let errorNombre = document.querySelector("#errorNombre");
    let apellido = document.querySelector("#apellido");
    let errorApellido = document.querySelector("#errorApellido");
    let email = document.querySelector("#email");
    let errorEmail = document.querySelector("#errorEmail");
    let password = document.querySelector("#password");
    let errorPass = document.querySelector("#errorPass");

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    //Validando los campos del formulario de Registro antes de ser enviados
    console.log(formRegistro);
    formRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault();
        //validamos el Nombre
        if (nombre.value.length < 2) {
            errorNombre.innerHTML = "*El Nombre debe tener al menos 2 caracteres";
        } else {
            errorNombre.innerHTML = "";
        }

        //validamos el Apellido
        if (apellido.value.length < 2) {
            errorApellido.innerHTML = "*El Apellido debe tener al menos 2 caracteres";
        } else {
            errorApellido.innerHTML = "";
        }
        
        //validamos el Email
        if (validateEmail(email.value) == false) {
            //console.log(validateEmail(email.value));
            errorEmail.innerHTML = "*El Email debe ser valido. Ej: jose@email.com";
        } else {
            errorEmail.innerHTML = "";
        }

        //validamos el Password
        if (password.value.length < 8) {
            errorPass.innerHTML = "*La Contraseña debe tener al menos 8 caracteres";
        } else {
            errorPass.innerHTML = "";
        }
        formRegistro.submit();
    })
   









})