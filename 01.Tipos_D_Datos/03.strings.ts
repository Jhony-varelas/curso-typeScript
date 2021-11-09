// DEPENDIENDO DEL PROYECTO SE DEBE MANEJAR ASI LAS VARIABLES PARA QUE
//TYPESCRIPT ENTIENDA DE QUE SON ARCHIVOS INDEPENDIENTES ( NO GLOVALES)
//(ENCAPSULA EL CODIGO)

(() => {
  const batman: string = "batman";
  const linternaVerde: string = "linterna Verde";
  const volcanNegro: string = `Heroe: volcan Negro`;

  console.log(`I am ${batman}`)
  console.log(batman.toUpperCase());

  // COMO EN BATMAN NO HAY 10 CARACTERES VA A SACAR ERROR,
  //PERO SI COLOCAMOS EL SIGNO ? (NULL CHECK) VA A VALIDAR SI HAY ALGO
  // SI NO HAY NADA SE VA A LA OPERACION OR || Y ENVIA EL MENSAJE
  console.log(batman[10]?.toUpperCase() || "no hay caracteres en esa posicion")
})();
