(() => {
  let flash: {
    nombre: string;
    edad?: number;
    poderes: string[];
    getnombre?: () => string;
  } = {
    nombre: "johny",
    edad: 27,
    poderes: ["super velocitad", "viaja en el tiempo"],
  };


  flash={
      nombre: "clark kent",
      poderes:["super fuerza"],
      getnombre(){
          return this.nombre;
      }
  }
  console.log(flash)
})();
