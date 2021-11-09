(() => {
  class Avenger {
    // cuando definimos private. solo voy a tener acceso a esta propiedad dentro de esta clase

    //private name: string = "";
    //public team: string = "";
    //public realName?: string = ""; // opcional
    static avgAge: number = 35;
    static GetAvgAge() {
    }

    // dentro del constructor podremos definir el tipo de propiedad como argumento
    //
    constructor(
      private name: string = "super heroe",
      public team: string,
      public realName?: string
    ) {}

    //metodos

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  //para utilizarla declaramos:

  const antMan: Avenger = new Avenger("Antman", "capitan");
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
