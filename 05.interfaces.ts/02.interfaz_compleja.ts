(() => {

    //las interfaces complejas sirven para anidarce una de la otra.
    //tambien podemos poner las propiedades opcionales
    // la sinterfaces no transpilan a codigo javaScript
  interface Cliente {
    name: string;
    age?: number;
    direccion: direccion;
  }

  interface direccion {
    barrio: string;
    calle: number;
    piso: number;
  }

  //intanciamos las interfaces co los datos anidados
  const cliente = {
    name: "fernando",
    edad: 25,
    direccion: {
        barrio: "castilla",
        calle: 92,
        piso: 2,
      },
  };

  const cliente2: Cliente = {
    name: "jhony",
    age: 28,
    direccion: {
      barrio: "castilla",
      calle: 92,
      piso: 2,
    },
  };
})();
