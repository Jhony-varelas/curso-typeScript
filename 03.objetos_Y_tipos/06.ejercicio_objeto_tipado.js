"use strict";
//crear un objeto personalizado.
//              objetos
// aca le decimos a batimovil que va a ser de tipo carro y que puede tener si quiere la
// opcion disparar
var batimovil = {
    carroceria: "negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
var bumblebee = {
    carroceria: "amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("disparando");
    },
};
//decimos que villanos es un arreglo de villano
var villanos = [
    {
        nombre: "lex luthor",
        edad: 49,
        mutante: false,
    },
    {
        nombre: "octopus",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "logan",
        edad: 60,
        mutante: true,
    },
];
// definimos la variable charles y decimos que es de tipo Charles
var charles = {
    poder: "psiquico",
    estatura: 1.75,
};
var apocalipcis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Angel"],
};
//mystique, debe poder ser de esos mutantes (charles o apocalipsis)
var mystique;
mystique = charles;
mystique = apocalipcis;
