"use strict";
// PODEMOS PONER UN ARGUMENTO OPCIONAL SI LO REQUERIMOS CON EL
// SIGNO DE ? Y NOS RETORNA UN UNDEFINED,
//PERO PODEMOS PONER TAMBIEN EN EL RETORNO UN OR || PARA QUE NOS
//RETORNE UN MENSAJE, NOMBRE SIN APELLIDO.
(function () {
    var fullName = function (nombre, apellido) {
        return nombre + " " + (apellido || "sin apellido");
    };
    var nombre = fullName("jhony");
    console.log({ nombre: nombre });
})();
