"use strict";
// se utiliza para controlar las manera de como las clases van a ser creadas
// patron singletone
(function () {
    var Apocalice = /** @class */ (function () {
        function Apocalice(name) {
            this.name = name;
        }
        Apocalice.llamarApocalice = function () {
            if (!Apocalice.instance) {
                Apocalice.instance = new Apocalice("soy apocalipsis el unico");
            }
            return Apocalice.instance;
        };
        return Apocalice;
    }());
    var apocalice1 = Apocalice.llamarApocalice();
    console.log(apocalice1);
})();
