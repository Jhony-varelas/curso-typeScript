"use strict";
//DEBEMOS ESPECIFICAR LOS ARGUMENTOS CON EL TIPO DE VARIABLE TAMBIEN
(function () {
    var fullName = function (nombre, apellido) {
        return nombre + " " + apellido;
    };
    var nombre = fullName("jhony", "varelas");
    console.log({ nombre: nombre });
})();
