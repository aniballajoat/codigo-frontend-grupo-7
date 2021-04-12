//JS

//lenguaje funcional, dinamico

//usado tanto en front y backend

//frameworks de diseño de interfaces como ReactJS, usan JS como lenguaje

//variables:
//su uso para valores que cambiaran con el tiempo
//antes se usaba var
/*
let variable_texto = "cadena de texto";

let variable_numerica_entera = 0;

let variable_numerica_decimal = 6.5;

let variable_booleana_verdadera = true;

let variable_booleana_falsa = false;

//arrays, funciones, objetos

let variable_array = [1, 2, 3, 4];

let variable_funcion = function sumar(a, b) {
  return a + b;
};

let variable_objeto = {
  propiedad1: "cadena_de_texto",
  propiedad2: 0,
  propiedad3: {
    subpropiedad1: "cadena_de_texto",
    subpropiedad2: 3,
  },
  propiedad4: false,
};

//constantes
//valores que se asignan una vez y no vuelven a cambiar

const miNombre = "Mi nombre no cambiara con el tiempo";

const miFechaCumple = new Date("June 12 1990");

const diaActual = new Date();

let diaActual = new Date();

//operaciones aritmeticas

let suma = 2 + 4;

let resta = 9 - 4;

let multiplicacion = 4 * 6;

let division = 100 / 5;

let modulo = 8 % 4;


function formula(a, b) {
  return a ** 2 + 2 * a * b + b ** 2;
}
console.log(formula(2, 3));

//condicionales - if-else if-else, switch

//evaluan una condicion y dependiendl del resultado(si es true o false)
//ejecutan cierto codigo

let a = 25;

if (a === 25) {
  console.log("Los numeros son iguales");
} else if (a === 34) {
  console.log("No, equivale a 25");
} else {
  console.log("Comparacion no valida");
}

//operadores ternarios

let nombre = "Josue";

let evaluaCondicion =
  nombre === "Josue" ? "Si se llama asi" : "Hey!, te equivocaste de nombre";

let numero = 3;
let evaluaNumeroMagico =
  numero === 4
    ? "hey! lo encontraste"
    : numero === 5
    ? "efectivamente es el 5"
    : "sigue intentando";

//switch-case

let numeroParoImpar = 4;

switch (numeroParoImpar) {
  case 4:
    console.log("Numero Par");
    break;
  case 5:
    console.log("Numero impar");
    break;
  case 6:
    console.log("Numero Par");
    break;
  case 7:
    console.log("Numero impar");
    break;
  case 8:
    console.log("Numero Par");
    break;
  case 9:
    console.log("Numero impar");
    break;
}

//arreglos

let arrayDeNumeros = [1, 2, 3, 4, 5];

let arrayDeNombres = ["Marco", "Polo", "Raul", "Andrea", "Jimena"];

let arrayDeUsuarios = [
  { nombre: "Paul", edad: 21, colorFav: "verde" },
  { nombre: "Marie", edad: 31, colorFav: "azul" },
  { nombre: "Jhon", edad: 16, colorFav: "rojo" },
  { nombre: "Carla", edad: 51, colorFav: "dorado" },
  { nombre: "Paula", edad: 11, colorFav: "verde" },
  { nombre: "Mario", edad: 41, colorFav: "azul" },
  { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
  { nombre: "Carlos", edad: 41, colorFav: "dorado" },
  { nombre: "Paulina", edad: 2, colorFav: "verde" },
  { nombre: "Marcos", edad: 65, colorFav: "azul" },
  { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
  { nombre: "Jimena", edad: 71, colorFav: "dorado" },
];
*/
/*
let elemento = arrayDeObjetos[0].nombre;

for (elemento in arrayDeObjetos) {
  console.log(elemento);
}

for (let i = 0; i < arrayDeObjetos.length; i++) {
  console.log(arrayDeObjetos[i]);
}
*/
/*
function agrupar() {
  let verde15 = [];
  let verde50 = [];
  let rojo15 = [];
  let rojo50 = [];
  let dorado15 = [];
  let dorado50 = [];
  let nombres = [];
  let edades = [];
  let colores = [];

  for (let i = 0; i < arrayDeUsuarios.length; i++) {
    let actual = arrayDeUsuarios[i];
    let suColor = actual.colorFav;
    let edad = actual.edad;
    if (suColor === "verde") {
      if (edad > 15) {
        verde15.push(actual);
      }
      if (edad < 50) {
        verde50.push(actual);
      }
    } else if (suColor === "rojo") {
      let edad = actual.edad;
      if (edad > 15) {
        rojo15.push(actual);
      }
      if (edad < 50) {
        rojo50.push(actual);
      }
    } else if (suColor === "dorado") {
      let edad = actual.edad;
      if (edad > 15) {
        dorado15.push(actual);
      }
      if (edad < 50) {
        dorado50.push(actual);
      }
    }
    nombres.push(actual.nombre);
    if(edades.includes(edad)===false){
        edades.push(edad);
    }
    if (colores.includes(suColor)===false) {
      colores.push(suColor);
    }
  }
  console.log("les gusta verde y mayor a 15",verde15);
  console.log("les gusta verde y menor a 50",verde50);
  console.log("les gusta rojo y mayor a 15",rojo15);
  console.log("les gusta rojo y menor a 50",rojo50);
  console.log("les gusta dorado y mayor a 15",dorado15);
  console.log("les gusta dorado y menor a 50",dorado50);
  console.log("nombres de los usuarios: ",nombres);
  console.log("edades de los usuarios: ",edades);
  console.log("los colores existentes: ",colores);
}
agrupar();
*/