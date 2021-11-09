//crear un objeto personalizado.

//creamos el type
type carro = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void; // metodo opcional
};

//              objetos

// aca le decimos a batimovil que va a ser de tipo carro y que puede tener si quiere la
// opcion disparar
const batimovil: carro = {
  carroceria: "negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

const bumblebee = {
  carroceria: "amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    console.log("disparando");
  },
};

// villanos debe ser un arreglo de objetos personalizados.

//creamos el type

type Villano = {
  nombre: string;
  edad: number;
  mutante: boolean;
};

//decimos que villanos es un arreglo de villano
const villanos: Villano[] = [
  {
    nombre: "lex luthor",
    edad: 49,
    mutante: false,
  },
  {
    nombre: "octopus",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "logan",
    edad: 60,
    mutante: true,
  },
];

// objetos de multiples tipos
//cree 2 tipos, uno para charles y otro para apocalipcis

//creamos el type
type Charles = {
  poder: string;
  estatura: number;
};

// definimos la variable charles y decimos que es de tipo Charles
const charles: Charles = {
  poder: "psiquico",
  estatura: 1.75,
};

//creamos el type 2
type Apocalipcis = {
  lider: boolean;
  miembros: string[];
};

const apocalipcis: Apocalipcis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Angel"],
};



//mystique, debe poder ser de esos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipcis;

mystique = charles;
mystique = apocalipcis;



