//typescript no permite que a undefined le llegue un valor

(() => {
  let nada: undefined = undefined;

  console.log(nada)
})();
