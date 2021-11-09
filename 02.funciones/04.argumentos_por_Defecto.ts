// la variable por defecto se define o se le da el valor dentro de argumento

(() => {
  const fullName = (
    nombre: string,
    apellido?: string,
    upper: boolean = false
  ): String => {

    // si upper no viene...
    if (upper) {
      return `${nombre} ${apellido || "sin apellido"}`.toUpperCase();
    }
    else{
        return `${nombre} ${apellido || "sin apellido"}`
    }
  };
     // si upper no viene...
  const nombre = fullName("jhony", "varelas", );
  console.log({ nombre });

  // si upper  viene...
  const nombre2 = fullName("jhony", "varelas", true);
  console.log({ nombre2 });
})();


