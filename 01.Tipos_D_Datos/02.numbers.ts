// DEPENDIENDO DEL PROYECTO SE DEBE MANEJAR ASI LAS VARIABLES PARA QUE
//TYPESCRIPT ENTIENDA DE QUE SON ARCHIVOS INDEPENDIENTES ( NO GLOVALES)
//(ENCAPSULA EL CODIGO)

(() => {
  let avengers: number = 10;
  console.log(avengers);

  let villians: number = 20;

  if (avengers < villians) {
    console.log("estamos en lios");
  } else {
    console.log("no pasa nada");
  }

  //NaN  = NOT A NOMBER, ES CONSIDERADO COMO UN NUMERO POR LO TANTO NO
  //PRESENTA ERROR, POR QUE QUE HABRIA QUE VALIDAR SI SI ES UN NUMERO

  avengers = Number("55A");
  console.log(avengers);
})();
