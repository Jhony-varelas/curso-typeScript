"use strict";
(function () {
    var Avenger = /** @class */ (function () {
        // dentro del constructor podremos definir el tipo de propiedad como argumento
        //
        function Avenger(name, team, realName) {
            if (name === void 0) { name = "super heroe"; }
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.GetAvgAge = function () {
        };
        //metodos
        Avenger.prototype.bio = function () {
            return this.name + " (" + this.team + ")";
        };
        // cuando definimos private. solo voy a tener acceso a esta propiedad dentro de esta clase
        //private name: string = "";
        //public team: string = "";
        //public realName?: string = ""; // opcional
        Avenger.avgAge = 35;
        return Avenger;
    }());
    //para utilizarla declaramos:
    var antMan = new Avenger("Antman", "capitan");
    // en la instacia no nos permitira ver el nombre ya que es privado.
    console.log(antMan);
    // para ver la propiedad estatica se debe hacer referencia a la clase.
    console.log(Avenger.avgAge);
    //impresion del metodo
    console.log(antMan.bio());
    //impresion del metodo estatico
    // para ver la propiedad estatica se debe hacer referencia a la clase.
    console.log(Avenger.GetAvgAge());
})();
