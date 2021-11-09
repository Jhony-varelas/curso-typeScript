"use strict";
(function () {
    var addNumeros = function (a, b) {
        return a + b;
    };
    var saludar = function (name) {
        return "hola " + name;
    };
    var mundoSalvado = function () {
        return "El mundo esta salvado";
    };
    //para leer estas fnciones debemos declarar una variable
    //asignarla y hacer una funcion flecha y definir el tipo de
    //variable que retorna.
    var funcion1;
    funcion1 = addNumeros;
    console.log(funcion1(1, 5));
    var funcion2;
    funcion2 = saludar;
    console.log(funcion2("jhony"));
    var funcion3;
    funcion3 = mundoSalvado;
    console.log(funcion3());
})();
