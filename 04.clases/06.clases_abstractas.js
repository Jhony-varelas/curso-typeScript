"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // definimos la clase como abstracta
    var Mutante = /** @class */ (function () {
        function Mutante(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        return Mutante;
    }());
    //instanciamos clases heredando de la abstracta
    var Xmen = /** @class */ (function (_super) {
        __extends(Xmen, _super);
        function Xmen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xmen.prototype.salvarMundo = function () {
            return "mundo a salvo";
        };
        return Xmen;
    }(Mutante));
    var wolverin = new Xmen("wolverine", "logan");
    console.log(wolverin);
    console.log(wolverin.salvarMundo());
    //instanciamos clases heredando de la abstracta
    var villan = /** @class */ (function (_super) {
        __extends(villan, _super);
        function villan() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        villan.prototype.conquistarMundo = function () {
            return "Mundo conquistado";
        };
        return villan;
    }(Mutante));
    var magneto = new villan("magneto", "magnus");
    console.log(magneto);
    console.log(magneto.conquistarMundo());
    // tambien podemos hacer funciones
    var printName = function (nameM) {
        console.log(nameM.name);
    };
    // aca le enviamos el argumento que es extendido de mutante
    printName(wolverin);
})();
