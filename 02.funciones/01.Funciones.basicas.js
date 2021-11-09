"use strict";
//debemos indicarle que tipo de dato va a retornar despues de
//los parentecis
(function () {
    var hero = "flash";
    function returnName() {
        return hero;
    }
    var activarPoder = function () {
        return "poder activado";
    };
    console.log(typeof activarPoder);
})();
