// DEPENDIENDO DEL PROYECTO SE DEBE MANEJAR ASI LAS VARIABLES PARA QUE
//TYPESCRIPT ENTIENDA DE QUE SON ARCHIVOS INDEPENDIENTES ( NO GLOVALES)
//(ENCAPSULA EL CODIGO)

//EL TIPO ANY PERMITE QUE LA VARIABLE TOME CUALQUIER TIPO DE VALOR
(() => {
  let avenger: any = 123;

  avenger = "Dr strange";
  console.log(avenger);

  avenger = 120.24545345;
  console.log(avenger.toFixed(2));
})();