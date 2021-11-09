(() => {
// las interfaces funcionan igual que los type, a diferencia que esta si se puede
//extender
  interface heroe {
    nombre: string;
    edad?: number;
    poderes: number[];
    getnombre?: () => string;
  };

  let flash: heroe = {
    nombre: "johny",
    edad: 27,
    poderes: [1, 2],
  };

  let superman: heroe = {
    nombre: "clark",
    edad: 27,
    poderes: [1],
    getnombre() {
      return this.nombre;
    },
  };
})();
