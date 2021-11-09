// DEPENDIENDO DEL PROYECTO SE DEBE MANEJAR ASI LAS VARIABLES PARA QUE
//TYPESCRIPT ENTIENDA DE QUE SON ARCHIVOS INDEPENDIENTES ( NO GLOVALES)
//(ENCAPSULA EL CODIGO)

(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  console.log({ isSuperman }, { isBatman });

  isSuperman = isBatman ? true : false;
  
  console.log({ isSuperman });
})();
