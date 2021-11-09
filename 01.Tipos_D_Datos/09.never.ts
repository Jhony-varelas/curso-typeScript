// NEVER INDICA QUE LA FUNCION NO TERMINA EXITOZAMENTE.
// ESTO ARROJA UN ERROR Y YA NO PERMITE QUE EL CODIGO SE
//SIGA EJECUTANDO

(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  error("auxilio");
})();
