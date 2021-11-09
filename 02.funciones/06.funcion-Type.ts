(() => {
  const addNumeros = (a: number, b: number) => {
    return a + b;
  };

  const saludar = (name: string) => {
    return `hola ${name}`;
  };

  const mundoSalvado = () => {
    return `El mundo esta salvado`;
  };

  //para leer estas fnciones debemos declarar una variable
  //asignarla y hacer una funcion flecha y definir el tipo de
  //variable que retorna.

  let funcion1: (y: number, z: number) => number;
  funcion1 = addNumeros;
  console.log(funcion1(1, 5));

  let funcion2: (y: string) => string;
  funcion2 = saludar;
  console.log(funcion2("jhony"));

  let funcion3: () => String;
  funcion3 = mundoSalvado;
  console.log(funcion3());
})();
