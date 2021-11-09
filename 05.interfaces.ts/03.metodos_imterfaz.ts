(() => {
  // metodos de interfaces, los metodos tambien pueden ser opcionales

  interface Cliente {
    name: string;
    age?: number;
    direccion: direccion;
    getFullAdress(id: string): string;
  }

  interface direccion {
    barrio: string;
    calle: number;
    piso: number;
  }

  //intanciamos las interfaces co los datos anidados
  const cliente:Cliente = {
    name: "fernando",
    age: 25,
    direccion: {
      barrio: "castilla",
      calle: 92,
      piso: 2,
    },

    getFullAdress(id: string){
        return this.direccion.barrio
    }
  };

  const cliente2: Cliente = {
    name: "jhony",
    age: 28,
    direccion: {
      barrio: "castilla",
      calle: 92,
      piso: 2,
    },

    getFullAdress(){
        return this.direccion.barrio
    }
  };
})();
