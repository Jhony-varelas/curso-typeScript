"use strict";
//case basica
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, team, realName) {
            // cuando definimos private. solo voy a tener acceso a esta propiedad dentro de esta clase
            this.name = "";
            this.team = "";
            this.realName = ""; // opcional
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.avgAge = 35;
        return Avenger;
    }());
    //para utilizarla declaramos:
    var antMan = new Avenger("Antman", "capitan");
    // en la instacia no nos permitira ver el nombre ya que es privado.
    console.log(antMan);
    // para ver la propiedad estatica se debe hacer referencia a la clase.
    console.log(Avenger.avgAge);
})();
