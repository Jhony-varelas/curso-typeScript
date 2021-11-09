//case basica

(() => {
  class Avenger {
    // cuando definimos private. solo voy a tener acceso a esta propiedad dentro de esta clase
    private name: string = "";
    public team: string = "";
    public realName?: string = ""; // opcional
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  //para utilizarla declaramos:

  const antMan: Avenger = new Avenger("Antman", "capitan");
  // en la instacia no nos permitira ver el nombre ya que es privado.
  console.log(antMan);

  // para ver la propiedad estatica se debe hacer referencia a la clase.
  console.log(Avenger.avgAge);
})();
