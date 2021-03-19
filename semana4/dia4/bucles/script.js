/*----------Repaso

console.log("Hola mundo");

console.log(1 * 2);

let condicion = true;

if (condicion === true) {
    console.log("Esto se ejecuta si mi condicion es verdadera");
}
else{
    console.log("Esto se ejecuta si mi condicion es falsa");
}

let palabra = "";

if (palabra === "palabra1"){
    console.log("imprime palabra 1 si la comparacion es verdadera");
}
else if (palabra === "palabra2"){
    console.log("imprime palabra 2 si la comparacion es verdadera");
}
else if (palabra === "palabra3"){
    console.log("imprime palabra 3 si la comparacion es verdadera");
}
else if (palabra === "palabra4"){
    console.log("imprime palabra 4 si la comparacion es verdadera");
}
else{
    console.log("imprime palabra por defecto si ninguna de las comparaciones es verdadera");
}

let cancion = "la la la"
switch(cancion){
    case "cancion1":
        console.log("esta es la cancion 1")
        break
    case "cancion1":
        console.log("esta es la cancion 1")
        break
    case "cancion1":
        console.log("esta es la cancion 1")
        break
    case "cancion1":
        console.log("esta es la cancion 1")
        break
}*/

// FOR
let pasos;
for(pasos = 0; pasos < 5; pasos++){
    console.log(`la cantidad de pasos dados es: ${pasos} pasos`)
}
console.log(`la cantidad de pasos dados es: ${pasos} pasos`)
console.log(`se dieron en total ${pasos} pasos`)

var pares = [];
for(let esPar = 1;esPar <= 300; esPar++){
    if(esPar%2 ===0){
        pares.push(esPar);
    }
}
console.log(pares);

//Numeros divisibles entre 3 o 5 o 7 hasta 1000

var divisibles = []
for(let divide = 3;divide <= 1000; divide++){
    if(divide%3 ===0 || divide%5 ===0 || divide%7 ===0){
        divisibles.push(divide);
    }
}
console.log(divisibles);


//listar numeros menores a 10 que sean multiplos de 3 o 5 menores a 1000, y sumarlos
var listar = [];
let suma=0;
for(let anade = 3;anade < 1000; anade++){
    if(anade%3 ===0 || anade%5 ===0){
        listar.push(anade);
        suma += anade;
    }
}
console.log(`La lista con los numeros multiplos de 3 o 5: \n ${listar}`);
console.log(`Y a suma de estos numeros es: ${suma}`);

//Numeros primos
var primos = [2];
let tamano = 1;
let compara;
let valor = 0;
for(let esPrimo = 3;esPrimo <= 100; esPrimo += 2){
    valor = 0;
    for(let puntero = 0; puntero < tamano; puntero++){
        compara = primos[puntero];
        if(esPrimo%compara === 0){
            valor = 1;
            break;
        }
        
    }
    if(valor===0){
        primos.push(esPrimo);
        tamano++;
    }
}
console.log(primos);

//  ----------------------WHILE

var listar2 = [];
let suma2=0;
let anade2 = 3;
while(anade2 < 1000){
    if(anade2%3 ===0 || anade2%5 ===0){
        listar2.push(anade2);
        suma2 += anade2;
    }
    anade2++
}
console.log(`La lista con los numeros multiplos de 3 o 5: \n ${listar}`);
console.log(`Y a suma de estos numeros es: ${suma}`);
console.log(`Hecho con While`);

//---------------------------------------
let alumnos_favoritos = ["Cristiano", "Messi", "Maradona", "Pele", "Iniesta"];
let informacion = "Mis alumnos favoritos son: ";

const texto = document. querySelector("p");

for (let indice = 0; indice < alumnos_favoritos.length; indice++){
    informacion += alumnos_favoritos[indice] + ", ";
}

texto.textContent = informacion;

let array_vocales = ["a","e","i","o","u"];
let frases_vocales = "Mis vocales son: ";

const mi_titulo = document.querySelector("h1");

for(let i = 0; i < array_vocales.length; i++){
    frases_vocales += array_vocales[i] + '  ';
}
mi_titulo.textContent = frases_vocales;