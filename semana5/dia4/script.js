// window

console.log(location);

console.log("Esta es la URL de la pagina: ", location.href);

console.log("Este es el hostname:", location.hostname);

console.log("Este es mi host: ", location.host);

console.log("Este es mi path: ", location.pathname);

console.log("Este es el protocolo que uso: ", location.protocol);

let contador = 0;
let intervalo = setInterval(() => {
  console.log("Hola mundo");
  console.log(contador);
  contador++;
  if (contador === 6) {
    clearInterval(intervalo);
  }
}, 1000);
