"use strict";
// DEPENDIENDO DEL PROYECTO SE DEBE MANEJAR ASI LAS VARIABLES PARA QUE
//TYPESCRIPT ENTIENDA DE QUE SON ARCHIVOS INDEPENDIENTES ( NO GLOVALES)
//(ENCAPSULA EL CODIGO)
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isSuperman: isSuperman }, { isBatman: isBatman });
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
