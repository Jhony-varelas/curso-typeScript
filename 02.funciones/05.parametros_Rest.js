"use strict";
// el resto de argumentos se llamarian de esta manera
//... nombre variable : tipo de variable y recibe por []
//para unir todos los nombres utilizamos el metodo (joing) que es 
//el que une todos los arreglos, y puede serecibir la cantidad
//de argumentos que necesitemos.
(function () {
    var fullName = function (nombre) {
        var restoDeNombres = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restoDeNombres[_i - 1] = arguments[_i];
        }
        return nombre + " " + restoDeNombres.join(" ") + " ";
    };
    var superMan = fullName("clarl", "joseph", "kent");
    console.log({ superMan: superMan });
})();
