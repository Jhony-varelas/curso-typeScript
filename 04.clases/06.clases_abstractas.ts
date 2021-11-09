(() => {
  // definimos la clase como abstracta

  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  //instanciamos clases heredando de la abstracta
  class Xmen extends Mutante {
    salvarMundo() {
      return "mundo a salvo";
    }
  }

  const wolverin = new Xmen("wolverine", "logan");
  console.log(wolverin);
  console.log(wolverin.salvarMundo());

  //instanciamos clases heredando de la abstracta
  class villan extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado";
    }
  }

  const magneto = new villan("magneto", "magnus");
  console.log(magneto);
  console.log(magneto.conquistarMundo());

  // tambien podemos hacer funciones
  const printName = (nameM: Mutante) => {
    console.log(nameM.name);
  };
  // aca le enviamos el argumento que es extendido de mutante
  printName(wolverin)
})();
