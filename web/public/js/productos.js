window.addEventListener("load", function () {
    let formProd = document.querySelector("#formProd");
    let nombreProd = document.querySelector("#nombreProd");
    let errorNombreProd = document.querySelector("#errorNombreProd");
    let descripcion = document.querySelector("#descripcion");
    let errorDescripcion = document.querySelector("#errorDescripcion");

    //Validando los campos del formulario de Creacion de producto
    console.log(formProd);
    formProd.addEventListener("submit", function (evento) {
        evento.preventDefault();
        //validamos el Nombre
        if (nombreProd.value.length < 5) {
            errorNombreProd.innerHTML = "*El Nombre debe tener al menos 5 caracteres"
        } else {
            errorNombreProd.innerHTML = ""
        }

        //validamos la Descripción
        if (descripcion.value.length < 20) {
            errorDescripcion.innerHTML = "*La Descripción debe tener al menos 20 caracteres"
        } else {
            errorDescripcion.innerHTML = ""
        }

    })
})