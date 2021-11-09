"use strict";
// NEVER INDICA QUE LA FUNCION NO TERMINA EXITOZAMENTE.
// ESTO ARROJA UN ERROR Y YA NO PERMITE QUE EL CODIGO SE
//SIGA EJECUTANDO
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error("auxilio");
})();
