// PODEMOS PONER UN ARGUMENTO OPCIONAL SI LO REQUERIMOS CON EL
// SIGNO DE ? Y NOS RETORNA UN UNDEFINED,
//PERO PODEMOS PONER TAMBIEN EN EL RETORNO UN OR || PARA QUE NOS
//RETORNE UN MENSAJE, NOMBRE SIN APELLIDO.
(()=>{
    const fullName= (nombre:string, apellido?:string):String =>
    {
        return `${nombre} ${apellido || "sin apellido"}`
    }

    const nombre = fullName("jhony", )
    console.log({nombre})


})()