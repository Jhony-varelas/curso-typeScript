"use strict";
// la variable por defecto se define o se le da el valor dentro de argumento
(function () {
    var fullName = function (nombre, apellido, upper) {
        if (upper === void 0) { upper = false; }
        // si upper no viene...
        if (upper) {
            return (nombre + " " + (apellido || "sin apellido")).toUpperCase();
        }
        else {
            return nombre + " " + (apellido || "sin apellido");
        }
    };
    // si upper no viene...
    var nombre = fullName("jhony", "varelas");
    console.log({ nombre: nombre });
    // si upper  viene...
    var nombre2 = fullName("jhony", "varelas", true);
    console.log({ nombre2: nombre2 });
})();
