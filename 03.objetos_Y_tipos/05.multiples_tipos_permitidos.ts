(()=>{
    type heroe = {
        nombre: string;
        edad?: number;
        poderes: number[];
        getnombre?: () => string;
    }

    let tiposVariables: string | number | heroe = "superman"
    console.log(typeof tiposVariables)

    tiposVariables=20
    console.log(typeof tiposVariables)

    tiposVariables={
      nombre:"bruce",
      edad:25,
      poderes: [1]
    }
    console.log(typeof tiposVariables)


})()