"use strict";
//en type script hay una palabra reservada llamada type.
(function () {
    var flash = {
        nombre: "johny",
        edad: 27,
        poderes: [1, 2],
    };
    var superman = {
        nombre: "clark",
        edad: 27,
        poderes: [1],
        getnombre: function () {
            return this.nombre;
        },
    };
})();
