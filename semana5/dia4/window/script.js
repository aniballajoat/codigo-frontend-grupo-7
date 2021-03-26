// window
/*
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

setTimeout(() => {
    console.log("esta es la funcion de timeout") ;
}, 3000);*/

//localStorage
//almacenamiento local
window.localStorage.setItem("contrasenha", "1234");

let contra = window.localStorage.getItem("contrasenha");

let profile = window.localStorage.setItem("tema", "claro");

window.localStorage.removeItem("contra");

window.localStorage.clear();

if(window.confirm("Deseas eliminar todas las variables guardadas?")){
    alert("Ya se eliminaron");

    window.localStorage.clear();
}