//debemos indicarle que tipo de dato va a retornar despues de
//los parentecis
(() => {
  const hero: string = "flash";

  function returnName(): string {
    return hero;
  }

  const activarPoder = ():string => {
    return "poder activado";
  };

  console.log(typeof activarPoder)

  
})();
