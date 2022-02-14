window.addEventListener("load", function () {
    let formLogin = document.querySelector('#formLogin');
    let email = document.querySelector("#email");
    let errorEmail = document.querySelector("#errorEmailLogin");
    let password = document.querySelector("#password");
    let errorPass = document.querySelector("#errorPassLogin");
    

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    //Validando los campos del formulario de Login anter de ser enviados


    //validamos el Email
    console.log(formLogin);
    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();
        //validamos el Email
        if (validateEmail(email.value) == false) {
            //console.log(validateEmail(email.value));
            errorEmail.innerHTML = "*El Email debe ser valido "
        } else {
            errorEmail.innerHTML = ""
        }

        //validamos el Password
        if (password.value.length < 8) {
            errorPass.innerHTML = "*Debe ingresar la Contraseña"
        } else {
            errorPass.innerHTML = ""
        }

    })
   









})