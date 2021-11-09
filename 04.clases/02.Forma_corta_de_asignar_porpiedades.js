"use strict";
//forma corta para las propiedades de la clase
(function () {
    var Avenger = /** @class */ (function () {
        // dentro del constructor podremos definir el tipo de propiedad como argumento
        //
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
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
})();
