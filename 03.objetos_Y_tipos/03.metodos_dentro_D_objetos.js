"use strict";
(function () {
    var flash = {
        nombre: "johny",
        edad: 27,
        poderes: ["super velocitad", "viaja en el tiempo"],
    };
    flash = {
        nombre: "clark kent",
        poderes: ["super fuerza"],
        getnombre: function () {
            return this.nombre;
        }
    };
    console.log(flash);
})();
