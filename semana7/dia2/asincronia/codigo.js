//funcion asincrona
/*
async function fun_asincrona() {
  return 23;
}
//funcion flecha  asincrona
const otraFuncion = async () => 42;

//console.log(fun_asincrona());

fun_asincrona().then((valor) => {
  console.log("Este es el valor de la promesa", valor);
});

const valor = otraFuncion();
console.log(valor);

async function obtenerValor() {
  const value = await otraFuncion();
  return value;
}

console.log(obtenerValor);

let sumar = (x, y) => {
  return new Promise((resolve, reject) => {
    let suma = x + y;
    if (suma) {
      resolve(suma);
    } else {
      reject(Error("Hey!!, no es una operacion valida"));
    }
  });
};

const sumaNum = async (a, b) => {
  try {
    return (await a) + b;
  } catch {
    return Error("Hey!!, no es una operacion valida");
  }
};

sumaNum(2, "r").then((valor) => {
  console.log(valor);
});

//con async/await

const binomio = async (a, b) => {
  async function primerFactor() {
    let primerFactor = a ** 2;
    return primerFactor
      ? primerFactor
      : Error("No es una operacion valida-parte1");
  }

  async function segundoFactor() {
    let segundoFactor = 2 * a * b;
    return segundoFactor
      ? segundoFactor
      : Error("No es una operacion valida-parte1");
  }

  async function tercerFactor() {
    let tercerFactor = b ** 2;
    return tercerFactor
      ? tercerFactor
      : Error("No es una operacion valida-parte1");
  }

  const resultado1 = await primerFactor();
  const resultado2 = await segundoFactor();
  const resultado3 = await tercerFactor();

  return `Resultado: ${resultado1 + resultado2 + resultado3}`;
};

console.log(binomio(2, 3));
*/
//////trinomio

const trinomio = async (a, b, c) => {
  async function primerFactor() {
    let primerFactor = a ** 2;
    return primerFactor
      ? primerFactor
      : Error("No es una operacion valida-parte1");
  }

  async function segundoFactor() {
    let segundoFactor = 2 * a * b;
    return segundoFactor
      ? segundoFactor
      : Error("No es una operacion valida-parte1");
  }

  async function tercerFactor() {
    let tercerFactor = b ** 2;
    return tercerFactor
      ? tercerFactor
      : Error("No es una operacion valida-parte1");
  }
  async function cuartoFactor() {
    let cuartoFactor = c ** 2;
    return cuartoFactor
      ? cuartoFactor
      : Error("No es una operacion valida-parte1");
  }
  async function quintoFactor() {
    let quintoFactor = 2 * a * c;
    return quintoFactor
      ? quintoFactor
      : Error("No es una operacion valida-parte1");
  }
  async function sextoFactor() {
    let sextoFactor = 2 * c * b;
    return sextoFactor
      ? sextoFactor
      : Error("No es una operacion valida-parte1");
  }

  const resultado1 = await primerFactor();
  const resultado2 = await segundoFactor();
  const resultado3 = await tercerFactor();
  const resultado4 = await cuartoFactor();
  const resultado5 = await quintoFactor();
  const resultado6 = await sextoFactor();

  return `Resultado: ${
    resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6
  }`;
};

console.log(trinomio(5, 6, 7));
