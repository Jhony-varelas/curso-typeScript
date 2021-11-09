// el resto de argumentos se llamarian de esta manera
//... nombre variable : tipo de variable y recibe por []

//para unir todos los nombres utilizamos el metodo (joing) que es 
//el que une todos los arreglos, y puede serecibir la cantidad
//de argumentos que necesitemos.


(()=>{
    const fullName= (nombre:string, ... restoDeNombres:string[]):String =>
    {
        return `${nombre} ${restoDeNombres.join(" ")} `
    }
    
    const superMan= fullName("clarl", "joseph", "kent",)
    console.log({superMan})


})()