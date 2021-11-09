//DEBEMOS ESPECIFICAR LOS ARGUMENTOS CON EL TIPO DE VARIABLE TAMBIEN

(()=>{
    const fullName= (nombre:string, apellido:string):String =>
    {
        return `${nombre} ${apellido}`
    }

    const nombre = fullName("jhony", "varelas")
    console.log({nombre})


})()