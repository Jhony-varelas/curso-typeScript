"use strict";
(function () {
    // metodos de interfaces, los metodos tambien pueden ser opcionales
    //intanciamos las interfaces co los datos anidados
    var cliente = {
        name: "fernando",
        age: 25,
        direccion: {
            barrio: "castilla",
            calle: 92,
            piso: 2,
        },
        getFullAdress: function (id) {
            return this.direccion.barrio;
        }
    };
    var cliente2 = {
        name: "jhony",
        age: 28,
        direccion: {
            barrio: "castilla",
            calle: 92,
            piso: 2,
        },
        getFullAdress: function () {
            return this.direccion.barrio;
        }
    };
})();
