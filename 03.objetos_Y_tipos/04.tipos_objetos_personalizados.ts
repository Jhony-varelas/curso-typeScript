//en type script hay una palabra reservada llamada type.

//este codigo type esta creada para obligar y poner reglas
//a los objetos o variable que se esan definiendo.
// con esto ya construido podemos definir cualquier objeto de tipo 
//heroe


//tambien nos permite lo siguiente. si cambiamos el valor de una variable
//que era de tipo number a string... en donde tenga esta referencia heroe
// me va a mostrar errores en la terminal para poderlo cambiar.

type heroe = {
  nombre: string;
  edad?: number;
  poderes: number[];
  getnombre?: () => string;
};

(() => {
  let flash: heroe = {
    nombre: "johny",
    edad: 27,
    poderes: [1,2],
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
